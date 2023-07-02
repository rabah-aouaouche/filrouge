import axios from "axios";
import { Base_url } from "../../utils/Base_Url";

const getUsers = async () => {
  const response = await axios.get(`${Base_url}user/all-users`);

  return response.data;
};

const CustomersService = {
  getUsers,
};

export default CustomersService;
