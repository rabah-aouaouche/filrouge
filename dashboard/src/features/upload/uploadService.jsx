import axios from "axios";
import { config } from "../../utils/Axiosconfig";
import { Base_url } from "../../utils/Base_url";

const uploadImg = async (data) => {
  const response = await axios.post(`${Base_url}upload`, data, config);
  return response.data;
};
const deleteImg = async (id) => {
  const response = await axios.delete(
    `${Base_url}upload/delete-img/${id}`,

    config
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
