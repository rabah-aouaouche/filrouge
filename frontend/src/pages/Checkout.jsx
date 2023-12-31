import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import {
  createAnOrder,
  deleteUserCart,
  resetState,
} from "../features/user/userSlice";

let shippingSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address Details is Required"),
  state: yup.string().required("State is Required"),
  city: yup.string().required("City is Required"),
  country: yup.string().required("Country is Required"),
  pincode: yup.number().required("Pincode is Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);

  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  const [cartProductState, setCartProductState] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity) * cartState[index]?.price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  useEffect(() => {
    if (
      authState?.orderedProduct?.order !== null &&
      authState?.orderedProduct?.success == true
    ) {
      navigate("/my-orders");
    }
  }, [authState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      localStorage.setItem("address", JSON.stringify(values));
      setTimeout(() => {
        checkOutHandler();
      }, 300);
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index]?.productId?._id,
        quantity: cartState[index]?.quantity,
        color: cartState[index]?.color?._id,
        price: cartState[index]?.price,
      });
      setCartProductState(items);
    }
  }, [cartState]);

  const checkOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load ");
      return;
    }

    const result = await axios.post(
      "http://localhost:5000/api/user/order/checkout",
      { amount: totalAmount + 500 },
      config
    );
    if (!result) {
      alert("Somthing went wrong");
      return;
    }

    const { amount, id: order_id, currency } = result.data.order;
    const options = {
      key: "rzp_test_WmhSJEC7XcdV87", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Rabah Aouaouche",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          "http://localhost:5000/api/user/order/paymentVerification",
          data,
          config
        );

        setPaymentInfo({
          razorpayPaymentId: result.razorpay_payment_id,
          razorpayOrderId: result.razorpay_order_id,
        });

        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItems: cartProductState,
            paymentInfo: result.data,
            shippingInfo: JSON.parse(localStorage.getItem("address")),
          })
        );

        dispatch(deleteUserCart());
        localStorage.removeItem("address");
        dispatch(resetState());
      },
      prefill: {
        name: "Rabah Aouaouche",
        email: "rabahaou@example.com",
        contact: "00213657510069",
      },
      notes: {
        address: "51 bouelavrd mohamed 5",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-6 px-5">
          <div className="col-span-1 md:col-span-7">
            <div className="checkout-left-data border-r-2 border-black">
              <h3 className="website-name font-bold">Urban men</h3>
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <a>Information</a>
                  </li>
                  <li>Shipping</li>
                  <li>Payment</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start gap-3">
                <h4 className="title total font-semibold">
                  Contact Information:
                </h4>
                <p className="user-details total">
                  Rabah Aouaouche (rabehaou@gmail.com)
                </p>
              </div>

              <h4 className="mb-3 font-bold text-orange-600 mt-5">
                Shipping Address:
              </h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="flex gap-12 flex-wrap justify-between md:mr-6"
              >
                <div className="w-full">
                  <select
                    name="country"
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    value={formik.values.country}
                    className="select select-ghost w-full max-w-xs"
                  >
                    <option value="" selected disabled>
                      Select a country
                    </option>
                    <option value="algeria">Algeria</option>
                  </select>
                  <div>
                    {formik.touched.country && formik.errors.country ? (
                      <div className=" text-red-700">
                        {formik.errors.country}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered input-sm w-full max-w-xs"
                    name="firstName"
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    value={formik.values.firstName}
                  />
                  <div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className=" text-red-700">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered input-sm w-full max-w-xs"
                    name="lastName"
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    value={formik.values.lastName}
                  />
                  <div>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className=" text-red-700">
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered input-sm w-full max-w-xs"
                    name="address"
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    value={formik.values.address}
                  />
                  <div>
                    {formik.touched.address && formik.errors.address ? (
                      <div className=" text-red-700">
                        {formik.errors.address}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc"
                    className="input input-bordered input-sm w-full max-w-xs"
                    name="other"
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                    value={formik.values.other}
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="input input-bordered input-sm w-full max-w-xs"
                    name="city"
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    value={formik.values.city}
                  />
                  <div>
                    {formik.touched.city && formik.errors.city ? (
                      <div className=" text-red-700">{formik.errors.city}</div>
                    ) : null}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    className="select select-ghost w-full max-w-xs"
                    name="state"
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    value={formik.values.state}
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="Algeria">Algeria</option>
                  </select>
                  <div>
                    {formik.touched.state && formik.errors.state ? (
                      <div className=" text-red-700">{formik.errors.state}</div>
                    ) : null}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="ZipCode"
                    className="input input-bordered input-sm w-full max-w-xs"
                    name="pincode"
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                    value={formik.values.pincode}
                  />
                  <div>
                    {formik.touched.pincode && formik.errors.pincode ? (
                      <div className=" text-red-700">
                        {formik.errors.pincode}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <Link to="/cart" className="font-bold flex items-center">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      <button className="btn glass">
                        Continue to Shipping
                      </button>
                    </Link>
                    <button className="btn" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <div className=" pb-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-4 mb-2"
                    >
                      <div className="w-1/4 relative">
                        <span className="absolute top-0 right-0 badge bg-secondary text-white rounded-full p-2">
                          {item?.quantity}
                        </span>
                        <img
                          className="w-full border"
                          src={item?.productId?.images[0]?.url}
                          alt="product"
                        />
                      </div>
                      <div className="w-3/4">
                        <h5 className="total-price">
                          {item?.productId?.title}
                        </h5>
                        <p className="total-price">{item?.color?.title}</p>
                        <p className="total-price">
                          {item?.price * item?.quantity} Da
                        </p>
                      </div>
                    </div>
                  );
                })}

              <div className="flex justify-between items-center">
                <h4 className="total">Subtotal</h4>
                <p className="total-price">
                  {totalAmount ? totalAmount : 0} Da
                </p>
              </div>
              <div className="flex justify-between items-center border-b-2">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price"> 500 Da</p>
              </div>
              <div className="flex justify-between items-center pb-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">
                  {totalAmount ? totalAmount + 500 : 0} Da
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
