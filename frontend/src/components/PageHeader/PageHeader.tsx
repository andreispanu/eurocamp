import React from "react";
import { Box } from "@mui/material";
import ReusableButton from "../ReusableButton";
import { PageHeaderProps } from "./PageHeader.types";

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  buttonLabel,
  buttonColor = "primary",
  buttonAction,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>{title}</h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReusableButton
          label={buttonLabel}
          color={buttonColor}
          action={buttonAction}
        />
      </Box>
    </Box>
  );
};

export default PageHeader;
