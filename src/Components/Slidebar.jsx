import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../Utilis/assests";

const Slidebar = ({ category, setCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}
    >
      {categories.map((Category) => (
        <button
          className="category-btn"
          onClick={() => {
            setCategory(Category.name);
          }}
          style={{
            background: Category.name === category ? "#FC1503" : "#000",
            color: "white",
            margin: "2px",
            borderRadius: "10px"
          }}
          key={Category.name}
        >
          <span
            style={{
              color: Category.name === category ? "white" : "red",
              marginRight: "15px"
            }}
          >
            {Category.icon}
          </span>
          <span
            style={{
              opacity: Category.name === category ? "1" : "0.6"
            }}
          >
            {Category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Slidebar;
