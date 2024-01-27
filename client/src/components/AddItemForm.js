import React, { useState } from "react";
import { useEth } from "../contexts/EthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AddItemForm = () => {
  const {
    state: { contract, accounts },
  } = useEth();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleAddItem = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Check if contract and accounts are loaded
      if (contract && accounts.length > 0) {
        // Call the addItem function from the contract
        const response = await contract.methods
          .addItem(itemName, itemPrice)
          .send({ from: accounts[0] });
        console.log("Item added:", response);
        // Clear the form fields
        setItemName("");
        setItemPrice("");
        window.location.reload();
      } else {
        console.error("Contract not loaded or accounts not found");
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <form onSubmit={handleAddItem} style={{ width: "100%" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Item Price"
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddItemForm;
