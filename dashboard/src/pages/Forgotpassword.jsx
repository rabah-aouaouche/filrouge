import React from "react";
import { Link } from "react-router-dom";

const forgotpassword = () => {
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
                          Forgot Password
                        </h4>
                      </div>

                      <form className=" flex flex-col justify-center items-center">
                        <p className="mb-4">
                          Please enter your register email to get reset password
                          email
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
                          />
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 mt-5 pb-1 pt-1 text-center flex flex-col justify-start ">
                          {/* button */}
                          <button
                            type="submit"
                            className="btn glass btn-wide text-orange-600 "
                          >
                            Send link
                          </button>
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

export default forgotpassword;
