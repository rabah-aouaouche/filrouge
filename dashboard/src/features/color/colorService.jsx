import axios from "axios";
import { config } from "../../utils/Axiosconfig";
import { Base_url } from "../../utils/Base_Url";

const getColors = async () => {
  const response = await axios.get(`${Base_url}color/`);

  return response.data;
};

const createColor = async (color) => {
  const response = await axios.post(`${Base_url}color/`, color, config);

  return response.data;
};

const updateColor = async (color) => {
  const response = await axios.put(
    `${Base_url}color/${color.id}`,
    { title: color.colorData.title },
    config
  );

  return response.data;
};
const getColor = async (id) => {
  const response = await axios.get(`${Base_url}color/${id}`, config);

  return response.data;
};

const deleteColor = async (id) => {
  const response = await axios.delete(`${Base_url}color/${id}`, config);

  return response.data;
};

const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};

export default colorService;
