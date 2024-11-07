import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUsers, deleteUser } from "../../services/api";
import ReusableTable from "../../components/ReusableTable";
import { Container, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";
import { useSnackbar } from "../../contexts/SnackBarContext";
import ReusableLoader from "../../components/ReusableLoader";
import { User } from "./Users.types";

const Users = () => {
  const queryClient = useQueryClient();

  // The Error/sucess snackbar context is a wrapping the whole app. We have access to it in any component.
  const { showError, showSuccess } = useSnackbar();

  // Hardcoded user object for now. This will be replaced with a form to add a new user.
  const newUser:User = { name: "Andrei Spanu", email: "andrei.spanu@gmail.com" };

  // The available conlumns for the reusable table component and the data that will be displayed.
  const availableColumns = {
    headers: ["Name", "Email"],
    cells: ["name", "email"],
  };

  // Fetching the users data
  const {
    data: users,
    error: usersFetchError,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (usersFetchError instanceof Error) {
    const errorMessage =
      usersFetchError?.message || "An unexpected error occurred.";
    showError(errorMessage);
  }

  // Creating the users data
  const { mutate } = useMutation({
    mutationFn: addUsers,
  });

  const handleAddUser = () => {
    mutate(newUser, {
      onSuccess: () => {
        showSuccess("User added successfully");
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
      onError: (error: any) => {
        const errorMessage = error?.message || "Failed to add user";
        showError(errorMessage);
      },
    });
  };

  // Deleting the users data
  const { mutate: deleteUserMutation } = useMutation({
    mutationFn: deleteUser,
  });

  const handleDelete = (id: string) => {
    deleteUserMutation(id, {
      onSuccess: () => {
        showSuccess("User deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
      onError: (error: any) => {
        const errorMessage = error?.message || "Failed to delete user";
        showError(errorMessage);
      },
    });
  };

  // Reusable Loader component is used to show a loading spinner while the data is being fetched.
  if (isLoading) return <ReusableLoader />;

  return (
    <>
      {usersFetchError ? (
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
                buttonAction={() => {
                  handleAddUser();
                }}
                buttonColor="secondary"
              />
            </Grid>
            <Grid size={12} pb={theme.spacing(2)}>
              <ReusableTable
                data={users?.data || []}
                columns={availableColumns}
                onDelete={(userId: string) => handleDelete(userId)}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Users;
