import React from "react";
import Box from "@mui/material/Box";
import TopSection from "./TopSection/TopSection";
import DragDrop from "./DragDropSection/DragDrop";

const RightSection = () => {
  return (
    <Box>
      <TopSection />
      <DragDrop />
    </Box>
  );
};

export default RightSection;
