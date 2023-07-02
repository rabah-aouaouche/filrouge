import axios from "axios";
import { config } from "../../utils/Axiosconfig";

import { Base_url } from "../../utils/Base_Url";
const getEnquiries = async () => {
  const response = await axios.get(`${Base_url}enquiry/`);

  return response.data;
};

const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${Base_url}enquiry/${id}`, config);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${Base_url}enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  const response = await axios.put(
    `${Base_url}enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};

const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;
