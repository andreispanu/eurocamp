import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch Users
export const fetchUsers = async () => {
  try {
    const response = await api.get("/1/userss");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

// Fetch Parcs
export const fetchParcs = async () => {
  try {
    const response = await api.get("/1/parcss");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch parcs");
  }
};

// Fetch Bookings
export const fetchBookings = async () => {
  try {
    const response = await api.get("/1/bookingss");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch bookings"
    );
  }
};
