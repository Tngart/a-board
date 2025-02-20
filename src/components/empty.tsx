"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const EmptyState: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" color="text.primary">
        No posts available.
      </Typography>
      <Typography variant="body2" color="text.primary" mt={2}>
        Try adjusting your filters or check back later.
      </Typography>
    </Box>
  );
};

export default EmptyState;
