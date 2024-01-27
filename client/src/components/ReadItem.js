import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ReadItem = ({ item }) => {
  // Directly use the 'item' prop
  if (!item) {
    return <p>Loading item...</p>;
  }

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography color="textSecondary">Price: {item.price}</Typography>
        <Typography variant="body2" component="p">
          Is Sold: {item.isSold ? "Yes" : "No"}
        </Typography>
        <Typography variant="body2" component="p">
          Is Active: {item.isActive ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReadItem;
