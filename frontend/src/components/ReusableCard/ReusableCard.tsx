import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { ReusableCardProps } from "./ReusableCard.types";
import { CustomColors as customColors } from "../../theme";

const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  count,
  Icon,
  onClick,
}) => {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer", borderRadius: "20px" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={'medium'} >{title}</Typography>
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
        <Typography variant="body2" fontWeight={'bold'} sx={{ color: customColors.orange }}>Available</Typography>
        <Typography variant="h6" sx={{ color: customColors.brightGreen }} fontWeight={'bold'}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
