// ItemsFetcher.jsx
import React, { useEffect, useState } from "react";
import { useEth } from "../contexts/EthContext";

const ItemsFetcher = ({ children }) => {
  const [items, setItems] = useState([]);
  const {
    state: { contract },
  } = useEth();

  useEffect(() => {
    const fetchItems = async () => {
      if (contract) {
        try {
          const numberOfItems = await contract.methods
            .getNumberOfItems()
            .call();
          const fetchedItems = [];

          for (let i = 0; i < numberOfItems; i++) {
            const item = await contract.methods.readItem(i).call();
            if (item.isActive) {
              // Filter out inactive items if needed
              fetchedItems.push({ ...item, id: i });
            }
          }

          setItems(fetchedItems);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      }
    };

    fetchItems();
  }, [contract]);

  // Pass the fetched items to children
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { items });
  });
};

export default ItemsFetcher;
