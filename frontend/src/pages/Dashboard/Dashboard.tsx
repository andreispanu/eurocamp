import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchUsers, fetchParcs, fetchBookings } from "../../services/api";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";
import ReusableCard from "../../components/ReusableCard";
import PersonIcon from "@mui/icons-material/Person";
import ForestIcon from "@mui/icons-material/Forest";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { CustomColors as customColors } from "../../theme";
import { useSnackbar } from "../../contexts/SnackBarContext";
import ReusableLoader from "../../components/ReusableLoader";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { showError } = useSnackbar();

  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const {
    data: parcs,
    isLoading: parcsLoading,
    error: parcsError,
  } = useQuery({
    queryKey: ["parcs"],
    queryFn: fetchParcs,
  });

  const {
    data: bookings,
    isLoading: bookingsLoading,
    error: bookingsError,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  if (usersLoading || parcsLoading || bookingsLoading) {
    return (
      <ReusableLoader />
    );
  }

  if (
    bookingsError instanceof Error ||
    usersError instanceof Error ||
    parcsError instanceof Error
  ) {
    const errorMessage =
      bookingsError?.message ||
      usersError?.message ||
      parcsError?.message ||
      "An unexpected error occurred.";

    showError(errorMessage);
  }

  return (
    <>
      {bookingsError || usersError || parcsError ? (
        <Typography color="error" sx={{ mt: 4, textAlign: "center" }}>
          Error loading data. Please try again later.
        </Typography>
      ) : (
        <Container sx={{ backgroundColor: customColors.sand, height: "100vh" }}>
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
                  count={users?.data.length || 0}
                  Icon={PersonIcon}
                  onClick={() => navigate("/users")}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <ReusableCard
                  title="Parcs"
                  count={parcs?.data.length || 0}
                  Icon={ForestIcon}
                  onClick={() => navigate("/parcs")}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <ReusableCard
                  title="Bookings"
                  count={bookings?.data.length || 0}
                  Icon={EventNoteIcon}
                  onClick={() => navigate("/bookings")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
