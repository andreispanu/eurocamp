import React from "react";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";
import ReusableCard from "../../components/ReusableCard";
import PersonIcon from "@mui/icons-material/Person";
import ForestIcon from "@mui/icons-material/Forest";
import EventNoteIcon from "@mui/icons-material/EventNote";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container >
        <Grid
          container
          spacing={3}
          p={theme.spacing(2)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" fontWeight={"medium"}>
              Dashboard
            </Typography>
          </Grid>
          <Grid container size={12}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard
                title="Users"
                Icon={PersonIcon}
                onClick={() => navigate("/users")}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard
                title="Parcs"
                Icon={ForestIcon}
                onClick={() => navigate("/parcs")}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard
                title="Bookings"
                Icon={EventNoteIcon}
                onClick={() => navigate("/bookings")}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
