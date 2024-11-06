import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch Users
export const fetchUsers = async () => {
  const response = await api.get("/1/users");
  return response.data;
};

// Fetch Users by ID
export const fetchUsersById = async (id: string) => {
  const response = await api.get(`/1/users/${id}`);
  return response.data;
};

// Fetch Parcs
export const fetchParcs = async () => {
  const response = await api.get("/1/parcs");
  return response.data;
};

// Fetch Parcs by ID
export const fetchParcsById = async (id: string) => {
  const response = await api.get(`/1/parcs/${id}`);
  return response.data;
}

// Fetch Bookings
export const fetchBookings = async () => {
  const response = await api.get("/1/bookings");
  return response.data;
};
