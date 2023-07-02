import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <>
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
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Dashboard
                        </h4>
                      </div>

                      <form
                        onSubmit={formik.handleSubmit}
                        className=" flex flex-col items-center"
                      >
                        <p className="mb-4">
                          Login to your account to continue
                        </p>
                        <div>
                          {message.message == "Rejected"
                            ? "You are not an administrator"
                            : ""}
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
                            id="email"
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleChange("email")}
                            value={formik.values.email}
                            placeholder="Email address"
                            className="input input-bordered w-full max-w-xs text-black"
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className=" text-red-700">
                              {formik.errors.email}
                            </div>
                          ) : null}
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
                            name="password"
                            id="password"
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleChange("password")}
                            value={formik.values.password}
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs text-black"
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <div className=" text-red-700">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 mt-5 pb-1 pt-1 text-center flex flex-col justify-start ">
                          {/* button */}
                          <button
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          >
                            Login
                          </button>
                          {/* Forgot password link */}
                          <Link to="/forgot-password" className=" flex">
                            Forgot password?
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Right column container with background and description */}
                  <div
                    className="flex items-center bg-orange-600 rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-cover "
                    // style={{
                    //   backgroundImage: "url(images/loginbackground.jpg)",
                    // }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Welcome to the Admin Dashboard
                      </h4>
                      <p className="text-sm"></p>
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

export default Login;
