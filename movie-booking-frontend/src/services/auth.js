import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const checkUsernameExists = async (username) => {
  try {
    const response = await axios.post(`${API_URL}/checkUsername`, { username });
    return response.data.exists;
  } catch (error) {
    console.error("Error checking username:", error);
    return false;
  }
};

export { register, login, logout, checkUsernameExists };
