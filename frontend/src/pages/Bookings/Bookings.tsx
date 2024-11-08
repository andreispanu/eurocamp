import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBookings, fetchUsers, fetchParcs } from "../../services/api";
import ReusableTable from "../../components/ReusableTable";
import { format } from "date-fns";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PageHeader from "../../components/PageHeader";
import theme from "../../theme";
import ReusableLoader from "../../components/ReusableLoader";
import { useSnackbar } from "../../contexts/SnackBarContext";

const Bookings: React.FC = () => {

  const { showError } = useSnackbar();

  const {
    data: bookingsData,
    isLoading: bookingsLoading,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  const {
    data: usersData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const {
    data: parcsData,
    isLoading: parcsLoading,
    error: parcsError,
  } = useQuery({
    queryKey: ["parcs"],
    queryFn: fetchParcs,
  });

  if (usersLoading || parcsLoading || bookingsLoading) {
    return <ReusableLoader />;
  }

  const getUserNameById = (userId: string) => {
    const user = usersData?.data.find((u: any) => u.id === userId);
    usersError && showError("Error loading users data. Please try again later.");
    return user ? user.name : "Unknown User";
  };

  const getParcNameById = (parcId: string) => {
    const parc = parcsData?.data.find((p: any) => p.id === parcId);
    parcsError && showError("Error loading parcs data. Please try again later.");
    return parc ? parc.name : "Unknown Parc";
  };

  const transformedBookings = bookingsData?.data.map((booking: any) => ({
    ...booking,
    userName: getUserNameById(booking.user),
    parcName: getParcNameById(booking.parc),
    bookingdate: format(new Date(booking.bookingdate), "dd/MM/yyyy"),
  }));

  const availableColumns = {
    headers: ["User", "Parc", "Booking Date", "Comments"],
    cells: ["userName", "parcName", "bookingdate", "comments"],
  };

  const handleDelete = (id: string) => {
    console.log(`Delete booking with ID: ${id}`);
  };

  const handleAddBooking = () => {
    console.log("Add new booking");
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid size={12}>
            <PageHeader
              title="Bookings"
              buttonLabel="Add Booking"
              buttonAction={handleAddBooking}
              buttonColor="secondary"
            />
          </Grid>
          <Grid size={12} pb={theme.spacing(2)}>
            <ReusableTable
              data={transformedBookings || []}
              columns={availableColumns}
              onDelete={handleDelete}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Bookings;
