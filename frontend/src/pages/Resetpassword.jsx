import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../features/user/userSlice";

let passwordSchema = yup.object().shape({
  password: yup.string().required("Password is Required"),
});

const Resetpassword = () => {
  const location = useLocation();

  const getToken = location.pathname.split("/")[2];
  console.log(getToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));

      navigate("/login");
    },
  });

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
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
                          Reset Password
                        </h4>
                      </div>

                      <form
                        onSubmit={formik.handleSubmit}
                        className=" flex flex-col justify-center items-center"
                      >
                        <p className="mb-4">Enter your new password</p>
                        {/* Password input */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              Password
                            </span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs text-black"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
                          />
                          <div className="error mt-2">
                            {formik.touched.password && formik.errors.password}
                          </div>
                        </div>
                        {/* Password input */}
                        {/* <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-red-400">
                              Confirm Password
                            </span>
                          </label>
                          <input
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full max-w-xs text-black"
                          />
                        </div> */}

                        {/* Submit button */}
                        <div className="mb-12 mt-5 pb-1 pt-1 text-center flex flex-col justify-start ">
                          {/* button */}
                          <button
                            type="submit"
                            className="btn glass btn-wide text-orange-600 "
                          >
                            Ok
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

export default Resetpassword;
