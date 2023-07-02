import axios from "axios";
import { config } from "../../utils/Axiosconfig";
import { Base_url } from "../../utils/Base_url";

const getBrands = async () => {
  const response = await axios.get(`${Base_url}brand/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${Base_url}brand/`, brand, config);

  return response.data;
};
const updateBrand = async (brand) => {
  const response = await axios.put(
    `${Base_url}brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );

  return response.data;
};
const getBrand = async (id) => {
  const response = await axios.get(`${Base_url}brand/${id}`, config);

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${Base_url}brand/${id}`, config);

  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;
