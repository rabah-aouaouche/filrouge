import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    getblogs();
  }, []);
  const getblogs = () => {
    dispatch(getAllBlogs());
  };
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />

      <div className="blog-wrapper home-wrapper py-5  ">
        <div className="max-w-full mx-auto ">
          <div className="flex flex-wrap   ">
            <div className="w-full md:w-1/4">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Find By Categories</h3>
                <div>
                  <ul className=" ps-0 ">
                    <li>T-shirt</li>
                    <li>Jeans</li>
                    <li>baskets</li>
                    <li>sunglasses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="blog-wrapper py-5 home-wrapper-2">
            <div className="max-w-7xl mx-auto ">
              <div className="flex flex-wrap gap-14 justify-center">
                <div className="w-full mx-auto text-center flex flex-col justify-center">
                  <h3 className="text-2xl font-bold">Our Latest Blogs</h3>
                </div>
                {blogState &&
                  blogState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=" w-1/1  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                      >
                        <BlogCard
                          id={item?._id}
                          title={item?.title}
                          description={item?.description}
                          image={item?.images[0]?.url}
                          date={moment(item?.createdAt).format(
                            "MMMM Do YYYY, h:mm a"
                          )}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog;
