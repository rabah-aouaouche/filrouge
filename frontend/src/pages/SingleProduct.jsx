import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../features/product/productSlice";
import Color from "../components/Color";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(productState);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index].productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose a color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const [popularProduct, setPopularProduct] = useState([]);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productState]);
  console.log(popularProduct);

  // Comments section

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please write a review about the product");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId })
      );
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 100);
    }
    return false;
  };

  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {productState?.images && productState.images[0] && (
                <img alt="Les Paul" src={productState?.images[0].url} />
              )}
              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                {productState?.images && productState.images[1] && (
                  <img
                    alt="Les Paul"
                    src={productState?.images[1].url}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                )}

                {productState?.images && productState.images[2] && (
                  <img
                    alt="Les Paul"
                    src={productState?.images[2].url}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                )}

                {productState?.images && productState.images[3] && (
                  <img
                    alt="Les Paul"
                    src={productState?.images[3].url}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                )}

                {productState?.images && productState.images[4] && (
                  <img
                    alt="Les Paul"
                    src={productState?.images[4].url}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                )}
              </div>
            </div>

            <div className="sticky top-0">
              {/* <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong> */}

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {productState?.title}
                  </h1>

                  <p className="text-sm">{productState?.brand}</p>

                  <ReactStars
                    count={5}
                    size={16}
                    value={productState?.totalrating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>

                <p className="text-lg font-bold">{productState?.price} Da</p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: productState?.description,
                    }}
                  ></p>
                </div>

                {/* <button className="mt-2 text-sm font-medium underline">
                  Read More
                </button> */}
              </div>

              <div className="mt-4 flex gap-10">
                <div className="prose max-w-none">
                  <h1>Tags:</h1>
                  <p className=" uppercase">{productState?.tags}</p>
                </div>
                <div className="prose max-w-none">
                  <h1>Category:</h1>
                  <p className=" uppercase">{productState?.category}</p>
                </div>
              </div>

              <form className="mt-4">
                {alreadyAdded === false && (
                  <>
                    <fieldset>
                      <legend className="mb-1 text-sm font-medium">
                        Color
                      </legend>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </fieldset>
                  </>
                )}

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>

                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="size_xs" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XS
                      </span>
                    </label>

                    <label htmlFor="size_s" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        S
                      </span>
                    </label>

                    <label htmlFor="size_m" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        M
                      </span>
                    </label>

                    <label htmlFor="size_l" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        L
                      </span>
                    </label>

                    <label htmlFor="size_xl" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_xl"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XL
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className="mt-8 flex gap-4">
                  {alreadyAdded === false && (
                    <>
                      <div>
                        <label htmlFor="quantity" className="sr-only">
                          Qty
                        </label>

                        <input
                          type="number"
                          id="quantity"
                          min={1}
                          max={10}
                          value={quantity}
                          className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="button"
                    className="block rounded bg-orange-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    onClick={() => {
                      alreadyAdded ? navigate("/cart") : uploadCart();
                    }}
                  >
                    {alreadyAdded ? " Go To Cart" : "Add to Cart"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="">
            <div className="flex flex-col  p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-700 dark:text-gray-100">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">
                  Your opinion matters!
                </h2>

                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                  <div className="flex space-x-3">
                    <ReactStars
                      count={5}
                      size={16}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                      onChange={(e) => {
                        setStar(e);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <textarea
                    id=""
                    name=""
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                  ></textarea>
                  <button
                    type="button"
                    onClick={addRatingToProduct}
                    className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
                  >
                    Leave feedback
                  </button>
                </div>
              </div>
              {productState &&
                productState.ratings?.map((item, index) => {
                  return (
                    <div key={index} className="comment ">
                      <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                          <div>
                            <h4 className="font-bold">
                              Posted By:{item?.postedby}
                            </h4>
                            <span className="text-xs dark:text-gray-400">
                              Date: {item?.date && item.date.split("T")[0]}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                          </svg>
                          <span className="text-xl font-bold">
                            {item?.star}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>{item?.comment}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-orange-600 sm:text-3xl">
              Popular Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="flex gap-5 pt-10 justify-center">
            {productsState &&
              productsState?.map((item, index) => {
                if (item.tags === "popular") {
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
                              {item?.images && item.images[0] && (
                                <img
                                  src={item.images[0].url}
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
                                  <button className="border-0 bg-transparent">
                                    <img
                                      src="/images/add-cart.svg"
                                      alt="addcart"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="relative bg-white pt-2">
                              <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-2">
                                {item?.title}
                              </h3>

                              <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                <p className="text-xs">{item?.price} Da</p>

                                <p className="text-xs uppercase tracking-wide">
                                  {item?.brand}
                                </p>
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
              })}
          </div>

          <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                1
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-black bg-black text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
