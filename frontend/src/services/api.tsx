import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Users
export const fetchUsers = async () => {
  try {
    const response = await api.get("/1/users");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

export const addUsers = async (userData: { name: string; email: string }): Promise<void> => {
  await api.post("/1/users", userData);
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/1/users/${id}`);
};

// Parcs 
export const fetchParcs = async () => {
  try {
    const response = await api.get("/1/parcs");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch parcs");
  }
};

export const addParcs = async (parcData: { name: string; description: string }): Promise<void> => {
  try {
    await api.post("/1/users", parcData);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to add parc");
  }
};

export const deleteParcs = async (id: string): Promise<void> => {
  try {
    await api.delete(`/1/parcs/${id}`);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to delete parc");
  }
};

//  Bookings =====================
export const fetchBookings = async () => {
  try {
    const response = await api.get("/1/bookings");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch bookings"
    );
  }
};

// To follow the same pattern, following functions:
// export const addBookings 
// export const deleteBookings  
