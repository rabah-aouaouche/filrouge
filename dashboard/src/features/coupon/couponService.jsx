import axios from "axios";
import { config } from "../../utils/Axiosconfig";
import { Base_url } from "../../utils/Base_url";
const getCoupons = async () => {
  const response = await axios.get(`${Base_url}coupon/`, config);

  return response.data;
};

const createCoupons = async (coupon) => {
  const response = await axios.post(`${Base_url}coupon/`, coupon, config);

  return response.data;
};
const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `${Base_url}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );

  return response.data;
};
const getCoupon = async (id) => {
  const response = await axios.get(`${Base_url}coupon/${id}`, config);

  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(`${Base_url}coupon/${id}`, config);

  return response.data;
};
const couponService = {
  getCoupons,
  createCoupons,
  deleteCoupon,
  getCoupon,
  updateCoupon,
};

export default couponService;
