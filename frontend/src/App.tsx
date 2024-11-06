import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Parcs from "./pages/Parcs";
import Bookings from "./pages/Bookings";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
             <Route path="/parcs" element={<Parcs />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
