import React, { useEffect } from "react";
import bg from "../assets/images/backgroundrabah.png";
import caroussel1 from "../assets/images/caroussel1.png";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/product/productSlice";
import ReactStars from "react-rating-stars-component";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillGift } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToWishlist } from "../features/product/productSlice";

const Homepage = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  let location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getblogs();
    getProducts();
  }, []);

  const getblogs = () => {
    dispatch(getAllBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <div
        className=" h-screen  bg-cover bg-repeat flex flex-col gap-10 pl-0 lg:pl-10  md:flex-row md:gap-0 justify-around  "
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <img src="" alt="" />

        <div className=" w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <p className="text-[#ffff] font-bold p-2">
            A new FRESH STYLE to dress
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Welcome to THE <br className="lg:hidden" />
            <span className=" text-orange-500"> Urban Men</span>
          </h1>
          <div className="flex justify-center items-center ">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Store.
            </p>
          </div>
          <p className=" md:text-2xl text-xl font-bold  text-white">
            We have recently added new articles.
            <span className=" text-gray-500">Click to discover.</span>
          </p>
          <Link to="/product" className=" specialbutt w-44 mx-auto top-5 ">
            DISCOVER
          </Link>
        </div>
        <div className="w-full h-screen mx-auto text-center lg:flex flex-col justify-center items-center hidden   ">
          {/* <div className="carousel carousel-center w-[300px] h-[450px] max-w-md p-4 space-x-4 bg-neutral rounded-box"></div> */}
          <div className="carousel carousel-center rounded-box md:w-[300px] md:h-[450px]   p-4 space-x-4 bg-neutral  ">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={caroussel1} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={caroussel1} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={caroussel1} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={caroussel1} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="p-6 my-6  dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-white border dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-[#d97b3e]">
              <FaShippingFast className=" w-10 h-10" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">500da</p>
              <p className="capitalize">All Shipping</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-white border dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <BiSupport className=" w-10 h-10" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">24/7</p>
              <p className="capitalize">Support</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-white border dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-[#d97b3e]">
              <AiFillGift className=" w-10 h-10" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">Daily Surprises</p>
              <p className="capitalize">Save up to 25% off</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-white border dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-[#d97b3e]">
              <MdPayment className=" w-10 h-10" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">Secure Payments</p>
              <p className="capitalize">100% Protected Payments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newcollection">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold  sm:text-5xl">New Collection</h2>

            <p className="max-w-md mx-auto mt-4 ">
              Play it cool in neutral colors, graphic patterns & relaxed
              silhouettes, up to 3XL.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <a href="#" className="relative block group">
                <img
                  src="images/h&m-green.jpg"
                  alt=""
                  className=" w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium  text-gray-500">
                    Casual Trainers
                  </h3>

                  <Link
                    to="/product/64b1936f988e077858ca17d8"
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="relative block group">
                <img
                  src="images/sunglasses-green.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-gray-500">
                    RECTANGULAR SUNGLASSES
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="relative block group">
                <img
                  src="images/shoescollection.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-gray-500">
                    MULTIPIECE SNEAKERS
                  </h3>

                  <Link className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </Link>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to
              <br className="sm:hidden" />
              20% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span> Use code:</span>
              <span className="font-bold text-lg">URBAN20</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <section className="famous-wrapper justify-center items-center flex py-5 home-wrapper-2">
        <div className="max-w-7xl flex flex-wrap gap-2 justify-center">
          <div className="w-full mx-auto text-center flex flex-col justify-center">
            <h3 className="text-4xl font-bold py-10">LATEST ADDED </h3>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-[23%]">
            <div className="famous-card relative h-full w-full">
              <img
                src="/images/essentielssummer.jpg"
                className=" h-full w-full"
                alt="famous"
              />
              <div className="famous-content absolute">
                <h5>Summer vibes</h5>
                <h6 className=" text-yellow-400">Summer Vibes</h6>
                <p className=" font-extrabold">
                  From <span className=" text-gray-500  ">2499Da</span>{" "}
                </p>
              </div>
            </div>
          </div>

          {productState &&
            productState?.map((item, index) => {
              // if (item.tags === "featured") {
              if (index < 3) {
                return (
                  <div
                    key={index} // je l'ai ajouté moi
                    className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-[23%]"
                  >
                    <div className="famous-card relative h-full w-full">
                      {item?.images && item.images[0] && (
                        <img
                          src={item.images[0].url}
                          className="w-full"
                          alt="famous"
                        />
                      )}

                      <div className="famous-content absolute flex flex-col justify-between">
                        <div>
                          <h5 className="text-black">{item?.brand}</h5>
                          <h6 className="text-black">{item?.title}</h6>
                        </div>
                        <div>
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src="/images/view.svg"
                              alt="view"
                              className=" w-16 "
                            />
                          </button>
                        </div>

                        {/* <p
                          className="text-black mt-20 "
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></p> */}
                      </div>
                    </div>
                  </div>
                );
              }
              // }
            })}
        </div>
      </section>

      <section className="marqee-wrapper py-5">
        <div className="max-w-full mx-auto">
          <div className="flex flex-row">
            <div className="w-full">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee autoFill className="flex items-center gap-5">
                  <div className=" mx-4 w-24">
                    <img src="images/brand-bershka.png" alt="brand" />
                  </div>
                  <div className=" mx-4 w-20">
                    <img src="images/brand-h&m.png" alt="brand" />
                  </div>
                  <div className=" mx-4 w-24">
                    <img src="images/brand-zara.png" alt="brand" />
                  </div>
                  <div className=" mx-4 w-24">
                    <img src="images/brand-puma.png" alt="brand" />
                  </div>
                  <div className=" mx-4 w-24">
                    <img src="images/brand-asos.png" alt="brand" />
                  </div>

                  <div className=" mx-4 w-24">
                    <img src="images/brand-tommy.png" alt="brand" />
                  </div>
                  <div className=" mx-4 w-24">
                    <img src="images/brand-thenorthface.png" alt="brand" />
                  </div>
                  <div className=" mx-4 w-24">
                    <img src="images/brand-ax.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-wrap gap-14 justify-center">
            <div className="w-full mx-auto text-center flex flex-col justify-center">
              <h3 className="text-4xl font-bold">OUR LATEST BLOGS</h3>
              <p>A WORLD OF INSPIRATION</p>
              <p>READ URBAN MEN BLOGS</p>
              <div className="flex justify-center pt-3">
                <TbArrowBigDownLinesFilled />
              </div>
            </div>
            {blogState &&
              blogState?.map((item, index) => {
                if (index < 3) {
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
                }
              })}
          </div>
        </div>
      </section>

      <section className="Featured-wrapper py-5 home-wrapper-2 pb-20">
        <div className="  max-w-7xl mx-auto">
          <div className=" flex flex-wrap gap-6 justify-center">
            <div className=" w-full  mx-auto text-center flex flex-col justify-center  ">
              <h3 className=" text-4xl font-bold">FEATURED COLLECTION</h3>
            </div>

            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "featured") {
                  if (index < 10) {
                    return (
                      <div key={index} className={"w-1/7 "}>
                        <div>
                          <div className="w-48 carde-product">
                            <div className="group block overflow-hidden">
                              <div className=" relative h-40  sm:h-64  sm:w-48  bg-gray-100">
                                {item?.images && item.images[0] && (
                                  <img
                                    src={item.images[0].url}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-0"
                                  />
                                )}
                                {item?.images && item.images[1] && (
                                  <img
                                    src={item.images[1].url}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100"
                                  />
                                )}
                                <div className="action-bar absolute">
                                  <div className="flex flex-col gap-4">
                                    <button
                                      className="border-0 bg-transparent"
                                      onClick={() => {
                                        addToWish(item?._id);
                                      }}
                                    >
                                      <img
                                        src="/images/wish.svg"
                                        alt="wishlist"
                                      />
                                    </button>

                                    <button className="border-0 bg-transparent">
                                      <img
                                        onClick={() =>
                                          navigate("/product/" + item?._id)
                                        }
                                        src="/images/view.svg"
                                        alt="view"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="relative h-[90px] bg-white pt-2 pl-1 pr-1 flex flex-col justify-between">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-2">
                                  {item?.title}
                                </h3>

                                <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                  <h4 className="text-xs">{item?.price} Da</h4>

                                  <h4 className="text-xs uppercase tracking-wide">
                                    {item?.brand}
                                  </h4>
                                </div>
                                <ReactStars
                                  count={5}
                                  size={16}
                                  value={
                                    item?.rating !== undefined
                                      ? item.rating.toString()
                                      : ""
                                  }
                                  edit={false}
                                  activeColor="#ffd700"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
