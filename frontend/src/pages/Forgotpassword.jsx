import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordToken } from "../features/user/userSlice";

let emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required "),
});

const Forgotpassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });

  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />

      <section className=" h-full   flex justify-center ">
        <div className="container h-full p-10">
          <div className=" flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className=" flex justify-center">
                  {/* Left column container */}
                  <div className="px-4 md:px-0 lg:w-6/12 ">
                    <div className="md:mx-6 md:p-12">
                      {/* Logo */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48 pt-5"
                          src="/images/logodark.png"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-4  pb-1 text-xl font-semibold">
                          Reset your password
                        </h4>
                      </div>

                      <form
                        onSubmit={formik.handleSubmit}
                        className=" flex flex-col justify-center items-center"
                      >
                        <p className="mb-4">
                          We will sent you an email to reset your password
                        </p>
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
                          <div className="error mt-2">
                            {formik.touched.email && formik.errors.email}
                          </div>
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 mt-5 pb-1 pt-1 text-center flex flex-col justify-start ">
                          {/* button */}
                          <button
                            type="submit"
                            className="btn glass btn-wide text-orange-600 "
                          >
                            Submit
                          </button>
                          <Link to="/login" className="mt-5">
                            cancel
                          </Link>
                        </div>
                      </form>
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

export default Forgotpassword;
