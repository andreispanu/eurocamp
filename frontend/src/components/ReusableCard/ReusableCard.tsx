import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { ReusableCardProps } from "./ReusableCard.types";

const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  Icon,
  onClick,
}) => {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer", borderRadius: "20px" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={"medium"}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 1,
            height: "150px",
          }}
        >
          {Icon && (
            <Icon fontSize="large" sx={{ width: "150px", height: "150px" }} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
