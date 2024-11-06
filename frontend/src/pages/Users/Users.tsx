import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/api";
import ReusableTable from "../../components/ReusableTable";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";
import { useSnackbar } from "../../contexts/SnackBarContext";
import ReusableLoader from "../../components/ReusableLoader";

const Users = () => {
  const { showError } = useSnackbar();
  const {
    data: users,
    error: usersError,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading)
    return (
      <ReusableLoader />
    );
  if (usersError instanceof Error) {
    const errorMessage = usersError?.message || "An unexpected error occurred.";

    showError(errorMessage);
  }

  const availableColumns = {
    headers: ["Name", "Email"],
    cells: ["name", "email"],
  };

  const handleAddUser = () => {};
  const handleDelete = (id: string) => {};

  return (
    <>
      { usersError  ? (
        <Typography color="error" sx={{ mt: 4, textAlign: "center" }}>
          Error loading data. Please try again later.
        </Typography>
      ) : (
        <Container>
          <Grid container>
            <Grid size={12}>
              <PageHeader
                title="Users"
                buttonLabel="Add User"
                buttonAction={handleAddUser}
                buttonColor="secondary"
              />
            </Grid>
            <Grid size={12} pb={theme.spacing(2)}>
              <ReusableTable
                data={users?.data || []}
                columns={availableColumns}
                onDelete={handleDelete}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Users;
