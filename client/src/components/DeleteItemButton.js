import React from "react";
import { useEth } from "../contexts/EthContext";

const DeleteItemButton = ({ itemId, onItemDelete }) => {
  const {
    state: { contract, accounts },
  } = useEth();

  const handleDeleteItem = async () => {
    try {
      await contract.methods.deleteItem(itemId).send({ from: accounts[0] });
      console.log("Item deleted");
      //onItemDelete(itemId); // Call the passed function to update the state
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return <button onClick={handleDeleteItem}>Delete Item</button>;
};

export default DeleteItemButton;
