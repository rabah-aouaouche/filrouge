import axios from "axios";
import { Base_url } from "../../utils/Base_Url";
import { config } from "../../utils/Axiosconfig";

const login = async (user) => {
  const response = await axios.post(`${Base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${Base_url}user/getallorders`, config);

  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.post(
    `${Base_url}user/getorderbyuser/${id}`,
    "",
    config
  );

  return response.data;
};

const AuthService = {
  login,
  getOrders,
  getOrder,
};

export default AuthService;
