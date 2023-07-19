import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getblog();
  }, []);
  const getblog = () => {
    dispatch(getABlog(getBlogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      {/*  Container */}
      <div className="container w-11/12 my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32">
          <Link to="/blogs" className=" mb-5 flex items-center gap-2">
            <BsArrowBarLeft /> Go back to Blogs
          </Link>
          <div className="flex justify-center">
            <h1 className="mb-6 text-3xl font-bold text-black">
              {blogState?.title}
            </h1>
          </div>

          {blogState?.images && blogState.images[0] && (
            <img
              src={
                blogState?.images[0].url
                  ? blogState?.images[0].url
                  : "https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
              }
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt="image"
            />
          )}

          <div className="mb-6 flex items-center">
            <div>
              <span>
                Published <u>{blogState?.createdAt.substring(0, 10)}</u>
              </span>
            </div>
          </div>

          <h1 className="mb-6 text-3xl font-bold text-black">
            {blogState?.title}
          </h1>

          <p
            dangerouslySetInnerHTML={{
              __html: blogState?.description,
            }}
          ></p>
        </section>
        {/*  Section: Design Block */}
      </div>
      {/* Container*/}
    </>
  );
};

export default SingleBlog;
