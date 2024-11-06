import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchParcs } from "../../services/api";
import ReusableTable from "../../components/ReusableTable";
import { Container, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Grid from "@mui/material/Grid2";
import theme from "../../theme";
import ReusableLoader from "../../components/ReusableLoader";
import { useSnackbar } from "../../contexts/SnackBarContext";

const Parcs = () => {
  const { showError } = useSnackbar();
  const {
    data: parcs,
    error: parcsError,
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

  if (isLoading) return <ReusableLoader />;
  if (parcsError instanceof Error) {
    const errorMessage = parcsError?.message || "An unexpected error occurred.";

    showError(errorMessage);
  }

  const handleAddParc = () => {};
  return (
    <>
      {parcsError ? (
        <Typography color="error" sx={{ mt: 4, textAlign: "center" }}>
          Error loading data. Please try again later.
        </Typography>
      ) : (
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
      )}
    </>
  );
};

export default Parcs;
