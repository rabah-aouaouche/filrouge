import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import bg from "../assets/images/gradient.jpg";
import ReactTypingEffect from "react-typing-effect";
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

  function scrollToLatestBlogs() {
    const latestBlogsSection = document.getElementById("latest-blogs");
    if (latestBlogsSection) {
      latestBlogsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />

      <section>
        <div
          className=" bg-transparent"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <ReactTypingEffect
              className="md:text-7xl sm:text-4xl text-xl font-bold md:pl-4 pl-4"
              text={["Urban Men Diaries"]}
              eraseSpeed={120}
              eraseDelay={120}
              typingDelay={20}
            />

            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              Created in 2023, Urban Men Diaries is a lifestyle blog for men
              that caters to all gentlemen who want to stay updated on men's
              news and discover various fashion, beauty, gastronomy,
              entertainment, travel, and much more. Enjoy reading, everyone!
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
                onClick={() => scrollToLatestBlogs()}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://www.commeuncamion.com/content/uploads/2023/03/starsky-insert-02.jpg"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
        />
      </section>

      <div className="blog-wrapper home-wrapper py-5  ">
        <div className="max-w-full mx-auto ">
          <section
            id="latest-blogs"
            className="blog-wrapper py-5 home-wrapper-2"
          >
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
