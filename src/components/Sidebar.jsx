import React from "react";
import { Stack,Box } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory,direction }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#272727",
          color: "white",
          width:'100%',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'start',
          // alignItems: 'start'
        }}
        key={category.name}
      >
        <Box style={{ color: category.name === selectedCategory ? "white" : "white", marginRight: "15px" }}>
          {category.icon}
        </Box>
        <Box style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </Box>
      </button>
    ))}
  </Stack>
);

export default Categories;
