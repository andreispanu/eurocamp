import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/api";
import ReusableTable from "../../components/ReusableTable";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";

const Users = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const availableColumns = {
    headers: ["Name", "Email"],
    cells: ["name", "email"],
  };

  const handleAddUser = () => {};
  const handleDelete = (id: string) => {};

  return (
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
  );
};

export default Users;
