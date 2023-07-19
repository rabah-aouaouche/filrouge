import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { BiEdit } from "react-icons/bi";

let profileSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile is Required"),
});

const Profile = () => {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const [edit, setEdit] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userState?.firstname,
      lastName: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile({ data: values, config2: config2 }));
      setEdit(true);
    },
  });

  return (
    <>
      <Meta title={"Profile"} />
      <BreadCrumb title="Profile" />
      {/* <section>
        <div className="  w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className=" w-full"> </div>
        </div>
      </section> */}
      <section className=" p-6 bg-transparent text-gray-50">
        <form
          onSubmit={formik.handleSubmit}
          className="  container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" h-screen  gap-6 px-6 rounded-md shadow-sm bg-gray-800">
            <div className=" flex justify-between items-center pt-5 ">
              <h1 className=" text-lg">Update Profile</h1>
              <BiEdit className="w-5 h-5" onClick={() => setEdit(false)} />
            </div>
            <div className="  space-y-2 col-span-full pb-10 mt-5">
              <p className="font-medium">Personal Inormation :</p>
              <h1 className=" uppercase text-6xl pt-10">
                {userState?.firstname} {userState?.lastname}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    First name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    value={formik.values.firstName}
                    disabled={edit}
                  />
                  <div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className=" text-red-700">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    value={formik.values.lastName}
                    disabled={edit}
                  />
                  <div>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className=" text-red-700">
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                    disabled={edit}
                  />
                  <div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className=" text-red-700">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="mobile" className="text-sm">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    type="number"
                    name="mobile"
                    placeholder="Mobile"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    value={formik.values.mobile}
                    disabled={edit}
                  />
                  <div>
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className=" text-red-700">
                        {formik.errors.mobile}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" pt-5 ">
                  {edit === false && (
                    <button
                      type="submit"
                      className="btn btn-wide  bg-orange-500"
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
              <div className=" mt-28"></div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Profile;
