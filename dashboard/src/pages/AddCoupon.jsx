import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createCoupon,
  getACoupon,
  resetState,
  updateACoupon,
} from "../features/coupon/couponSlice";

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiry: yup.date().required("Expiry Date is Required"),
  discount: yup.number().required("Discount Percentage is Required"),
});
const AddCoupon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getCouponId = location.pathname.split("/")[3];
  const newCoupon = useSelector((state) => state.coupon);

  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
    updatedCoupon,
  } = newCoupon;

  const changeDateFormat = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    const [day, month, year] = newDate.split("/");
    return [year, month, day].join("-");
  };

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupon(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfullly!");
    }
    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfullly!");
      navigate("/admin/coupon-list");
    }
    if (isError && couponName && couponDiscount && couponExpiry) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: changeDateFormat(couponExpiry) || "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getCouponId !== undefined) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateACoupon(data));
        dispatch(resetState());
      } else {
        dispatch(createCoupon(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState);
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
      </h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Enter coupon name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coupon name"
              className="input input-bordered input-warning w-full max-w-xs bg-white"
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
              value={formik.values.name}
              id="name"
            />
          </div>
          <div>
            {formik.touched.name && formik.errors.name ? (
              <div className=" text-red-700">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Enter expiry date</span>
            </label>
            <input
              type="Date"
              name="expiry"
              placeholder="Enter Expiry date"
              className="input input-bordered input-warning w-full max-w-xs bg-white"
              onChange={formik.handleChange("expiry")}
              onBlur={formik.handleBlur("expiry")}
              value={formik.values.expiry}
              id="date"
            />
          </div>
          <div>
            {formik.touched.expiry && formik.errors.expiry ? (
              <div className=" text-red-700">{formik.errors.expiry}</div>
            ) : null}
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Enter discount </span>
            </label>
            <input
              type="number"
              name="discount"
              placeholder="Enter Discount"
              className="input input-bordered input-warning w-full max-w-xs bg-white"
              onChange={formik.handleChange("discount")}
              onBlur={formik.handleBlur("discount")}
              value={formik.values.discount}
              id="discount"
            />
          </div>
          <div>
            {formik.touched.discount && formik.errors.discount ? (
              <div className=" text-red-700">{formik.errors.discount}</div>
            ) : null}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId !== undefined ? "Edit" : "Add"} Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
