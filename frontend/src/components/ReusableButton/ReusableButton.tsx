import React from "react";
import { Button } from "@mui/material";

interface ActionButtonProps {
  label: string;
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  action: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  action,
  color,
}) => {
  return (
    <Button
      color={color ?? "primary"}
      variant="contained"
      onClick={action}
      sx={{ height: "30px" }}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
