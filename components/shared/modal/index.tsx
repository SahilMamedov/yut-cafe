import * as React from "react";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import dynamic from "next/dynamic";

import { FC, ReactNode } from "react";

interface Props {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
}
export const Modal: FC<Props> = ({ onClose, open, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 800,
          bgcolor: "#ffffff",
          boxShadow: 24,
          borderRadius: "24px",
          p: 2,
          outline: "none",
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
};
