import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchParcs } from "../../services/api";
import ReusableTable from "../../components/ReusableTable";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";

const Parcs = () => {
  const {
    data: parcs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["parcs"],
    queryFn: fetchParcs,
  });

  const availableColumns = {
    headers: ["Name", "Description"],
    cells: ["name", "description"],
  };

  const handleDelete = (id: string) => {
    console.log(`Delete item with ID: ${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const handleAddParc = () => {};
  return (
    <Container>
      <Grid container>
        <Grid size={12}>
          <PageHeader
            title="Parcs"
            buttonLabel="Add parc"
            buttonAction={handleAddParc}
            buttonColor="secondary"
          />
        </Grid>
        <Grid size={12} pb={theme.spacing(2)}>
          <ReusableTable
            data={parcs?.data || []}
            columns={availableColumns}
            onDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Parcs;
