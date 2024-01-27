import React, { useState, useEffect } from "react";
import { useEth } from "../contexts/EthContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Grid } from "@mui/material";
import ReadItem from "./ReadItem";
import UpdateItemForm from "./UpdateItemForm";
import DeleteItemButton from "./DeleteItemButton";

const ItemList = ({}) => {
  const {
    state: { contract },
  } = useEth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        if (contract) {
          const itemCount = await contract.methods.getNumberOfItems().call();
          const loadedItems = [];
          for (let i = 0; i < itemCount; i++) {
            const item = await contract.methods.readItem(i).call();
            loadedItems.push({ ...item, id: i });
          }
          setItems(loadedItems);
        }
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [contract]);

  return (
    <Box sx={{ width: "25%", bgcolor: "background.paper" }}>
      <List>
        {items
          .filter((item) => item.isActive)
          .map(
            (
              item // Filter out inactive items
            ) => (
              <ListItem key={item.id} sx={{ mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <ListItemText
                      primary={`${item.name} - ${"$" + item.price}`}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ReadItem item={item} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <UpdateItemForm itemId={item.id} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DeleteItemButton itemId={item.id} />
                  </Grid>
                </Grid>
              </ListItem>
            )
          )}
      </List>
    </Box>
  );
};

export default ItemList;
