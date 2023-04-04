import * as React from "react";
import { useTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  const sx = styles(useTheme());
  return (
    <Box sx={sx.box_wrapper}>
      <CircularProgress sx={sx.loader} />
    </Box>
  );
}

const styles = (theme) => {
  return {
    box_wrapper: {
      display: "flex",
      justifyContent: "center",
    },
    loader: { marginTop: "20%" },
  };
};
