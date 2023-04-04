import React, { useState } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { TreeItem, TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "./CardComponent";
import { ShowTreeComponet } from "./ShowTreeComponet";

function TreeViewComponent() {
  const [activeTree, setActiveTree] = useState("Entertainment");
  const sx = styles(useTheme());
  const handleSelect = (event, selectedTree) => {
    setActiveTree(selectedTree);
  };
  return (
    <Box>
      <Stack direction="row">
        <Box sx={sx.treeView_wrapper}>
          <TreeView
            defaultExpandIcon={<ExpandMoreIcon />}
            defaultCollapseIcon={<ChevronRightIcon />}
            onNodeSelect={handleSelect}
            sx={sx.MuiTreeItem}
          >
            <TreeItem nodeId="Entertainment" label="Entertainment">
              <TreeItem nodeId="Music" label="Music" />
            </TreeItem>
            <TreeItem nodeId="Sports" label="Sports">
              <TreeItem nodeId="Cricket" label="Cricket" />
              <TreeItem nodeId="Football" label="Football" />
              <TreeItem nodeId="Tennis" label="Tennis" />
            </TreeItem>
          </TreeView>
        </Box>
        <Box width="80%" sx={sx.children_box_wrapper}>
          <ShowTreeComponet>
            <Card activeTree={activeTree} />
          </ShowTreeComponet>
        </Box>
      </Stack>
    </Box>
  );
}

export default TreeViewComponent;

const styles = (theme) => {
  return {
    children_box_wrapper: {
      position: "relative",
      left: "20%",
    },
    treeView_wrapper: {
      position: "fixed",
      width: "20%",
      height: "100vh",
      bgcolor: "#FFFFFF",
    },
    MuiTreeItem: {
      "& .MuiTreeItem-content": {
        width: "80%",
      },
      "& .MuiTreeItem-content .MuiTreeItem-label": {
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
      },
    },
  };
};
