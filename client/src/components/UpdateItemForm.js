import React, { useState } from "react";
import { useEth } from "../contexts/EthContext";

const UpdateItemForm = ({ itemId }) => {
  const {
    state: { contract, accounts },
  } = useEth();
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [isSold, setIsSold] = useState(false);
  const handleUpdateItem = async (event) => {
    event.preventDefault();
    try {
      await contract.methods
        .updateItem(itemId, newName, newPrice, isSold)
        .send({ from: accounts[0] });
      console.log("Item updated");
      window.location.reload();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <form onSubmit={handleUpdateItem}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="New name"
        required
      />
      <input
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
        placeholder="New price"
        required
      />
      <select
        value={isSold}
        onChange={(e) => setIsSold(e.target.value === "true")}
      >
        <option value="false">Not Sold</option>
        <option value="true">Sold</option>
      </select>
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItemForm;
