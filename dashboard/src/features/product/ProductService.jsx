import axios from "axios";
import { config } from "../../utils/Axiosconfig";
import { Base_url } from "../../utils/Base_url";

const getProducts = async () => {
  const response = await axios.get(`${Base_url}product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${Base_url}product/`, product, config);

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${Base_url}product/${id}`, config);

  return response.data;
};

const ProductService = {
  getProducts,
  createProduct,
  deleteProduct,
};

export default ProductService;
