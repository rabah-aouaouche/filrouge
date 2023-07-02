import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

let contactSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  mobile: yup.string().required("Mobile is Required"),
  email: yup
    .string()
    .email("Email should be valid.")
    .required("Email is Required"),
  comment: yup.string().required("Message is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(
        createQuery({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          comment: values.comment,
        })
      );
    },
  });

  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-wrap gap-14 justify-center">
            {/* <!-- Container for demo purpose --> */}
            <div className="container my-6 mx-auto md:px-6">
              {/* <!-- Section: Design Block --> */}
              <section className="mb-8">
                <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
                <div className="container px-6 md:px-12">
                  <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    <div className="flex flex-wrap">
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text text-red-400">
                                Name
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Name"
                              className="input input-bordered w-full max-w-xs"
                              name="name"
                              onChange={formik.handleChange("name")}
                              onBlur={formik.handleBlur("name")}
                              value={formik.values.name}
                            />
                            <div className="errors">
                              {formik.touched.name && formik.errors.name ? (
                                <div className=" text-red-700">
                                  {formik.errors.name}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text text-red-400">
                                Email address
                              </span>
                            </label>
                            <input
                              type="email"
                              placeholder="Email address"
                              className="input input-bordered w-full max-w-xs"
                              name="email"
                              onChange={formik.handleChange("email")}
                              onBlur={formik.handleBlur("email")}
                              value={formik.values.email}
                            />
                            <div className="errors">
                              {formik.touched.email && formik.errors.email ? (
                                <div className=" text-red-700">
                                  {formik.errors.email}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text text-red-400">
                                Phone Number
                              </span>
                            </label>
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              className="input input-bordered w-full max-w-xs"
                              name="mobile"
                              onChange={formik.handleChange("mobile")}
                              onBlur={formik.handleBlur("mobile")}
                              value={formik.values.mobile}
                            />
                            <div className="errors">
                              {formik.touched.mobile && formik.errors.mobile ? (
                                <div className=" text-red-700">
                                  {formik.errors.mobile}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-red-400">
                                Message
                              </span>
                            </label>
                            <textarea
                              className="textarea textarea-bordered h-24"
                              placeholder="Message"
                              rows="3"
                              name="comment"
                              onChange={formik.handleChange("comment")}
                              onBlur={formik.handleBlur("comment")}
                              value={formik.values.comment}
                            ></textarea>
                            <div className="errors">
                              {formik.touched.comment &&
                              formik.errors.comment ? (
                                <div className=" text-red-700">
                                  {formik.errors.comment}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          {/* <div className="form-control">
                            <label className="label cursor-pointer">
                              <span className="label-text text-red-400">
                                Send me a copy of this message
                              </span>
                              <input
                                type="checkbox"
                                checked="false"
                                className="checkbox"
                              />
                            </label>
                          </div> */}
                          <button className="btn glass btn-wide text-red-400 mt-5">
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap">
                          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                            <div className="flex items-start">
                              <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                  Technical support
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  rabehaou@gmail.com
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  +213 657510069
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                            <div className="flex items-start">
                              <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                  Sales questions
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  On delevry / with CCP
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  +213 555454545
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                            <div className="align-start flex">
                              <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                  Opening hours
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  Saturday - Thursday
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  8am - 9pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                            <div className="align-start flex">
                              <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                  Bug report
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  bugs@gmail.com
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                  +1 234-567-89
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}
          </div>
        </div>
      </section>

      <div className="blog-wrapper home-wrapper py-5 mb-32 ">
        <div className="max-w-full mx-auto ">
          <div className="flex flex-wrap   ">
            <div className=" w-full  mx-auto text-center flex flex-col justify-center mb-16 ">
              <h3 className=" text-2xl font-bold"> Our Location</h3>
            </div>
            <div className="w-full ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23465.66192950926!2d3.2017721258024365!3d36.70608138938496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5195e06afe3f%3A0x2345de40b794706b!2sCommercial%20and%20entertainment%20center%20Bab%20Ezzouar!5e0!3m2!1sfr!2sdz!4v1686131930181!5m2!1sfr!2sdz"
                width="600"
                height="450"
                className=" border-0 w-full px-32 "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
