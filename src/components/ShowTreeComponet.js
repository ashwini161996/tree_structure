import React from "react";
import { Box } from "@mui/material";
export const ShowTreeComponet = (props) => {
  const { children } = props;
  return (
    <div>
      <Box margin={2}>{children}</Box>
    </div>
  );
};
