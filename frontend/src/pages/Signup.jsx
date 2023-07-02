import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";

let schema = yup.object().shape({
  firstname: yup.string().required("Firstname is Required"),
  lastname: yup.string().required("Lastname is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required "),
  mobile: yup.string().required("Mobile is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <section className="gradient-form h-full   flex justify-center">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Left column container */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/* Logo */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48 pt-5"
                          src="/images/logodark.png"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Urban Men Team
                        </h4>
                      </div>

                      <form onSubmit={formik.handleSubmit}>
                        <p className="mb-4">Create an account</p>
                        {/* firstname input */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              First name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            className="input input-bordered w-full max-w-xs text-black"
                            value={formik.values.firstname}
                            onChange={formik.handleChange("firstname")}
                            onBlur={formik.handleBlur("firstname")}
                          />
                        </div>
                        <div className="error mt-2">
                          {formik.touched.firstname && formik.errors.firstname}
                        </div>
                        {/* LastName input */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              Last name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            className="input input-bordered w-full max-w-xs text-black"
                            value={formik.values.lastname}
                            onChange={formik.handleChange("lastname")}
                            onBlur={formik.handleBlur("lastname")}
                          />
                        </div>
                        <div className="error mt-2">
                          {formik.touched.lastname && formik.errors.lastname}
                        </div>
                        {/* Email input */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              Email address
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="input input-bordered w-full max-w-xs text-black"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                          />
                        </div>
                        <div className="error mt-2">
                          {formik.touched.email && formik.errors.email}
                        </div>
                        {/* Mobile input */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              Mobile
                            </span>
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            className="input input-bordered w-full max-w-xs text-black"
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
                            onBlur={formik.handleBlur("mobile")}
                          />
                        </div>
                        <div className="error mt-2">
                          {formik.touched.mobile && formik.errors.mobile}
                        </div>

                        {/* Password input */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              Password
                            </span>
                          </label>
                          <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs text-black"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
                          />
                        </div>
                        <div className="error mt-2">
                          {formik.touched.password && formik.errors.password}
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 mt-5 pb-1 pt-1 text-center flex flex-col justify-start ">
                          {/* button */}
                          <button
                            type="submit"
                            className="btn glass btn-wide text-orange-600 "
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                      {/* Sign up button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <Link to="/login">
                          <button className="btn glass text-orange-600  ">
                            Login
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right column container with background and description */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-cover "
                    style={{
                      backgroundImage: "url(images/loginbackground.jpg)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
