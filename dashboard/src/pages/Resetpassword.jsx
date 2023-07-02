import React from "react";
import { Link } from "react-router-dom";

const resetpassword = () => {
  return (
    <>
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
                        <h4 className="mb-12 mt-4  pb-1 text-xl font-semibold">
                          Reset Password
                        </h4>
                      </div>

                      <form className=" flex flex-col justify-center items-center">
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
                          />
                        </div>
                        {/* Password input */}
                        <div className="form-control w-full max-w-xs">
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
                        </div>

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

export default resetpassword;
