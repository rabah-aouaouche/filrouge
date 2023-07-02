import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/product/productSlice";
import Color from "../components/Color";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(productState);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState.length; index++) {
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

  return (
    <>
      <Meta title={"Product name"} />
      <BreadCrumb title="Product name" />
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
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong>

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

                <button className="mt-2 text-sm font-medium underline">
                  Read More
                </button>
              </div>

              <div className="mt-4 flex gap-10">
                <div className="prose max-w-none">
                  <h1>Tags:</h1>
                  <p>{productState?.tags}</p>
                </div>
                <div className="prose max-w-none">
                  <h1>Category:</h1>
                  <p>{productState?.category}</p>
                </div>
                <div className="prose max-w-none">
                  <h1>Availablity:</h1>
                  <p>In Stock</p>
                </div>
              </div>
              {/* <div className="mt-4 flex ">
                <div className="prose max-w-none">
                  <h1>Product Link:</h1>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div> */}

              <form className="mt-8">
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
                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    onClick={() => {
                      alreadyAdded ? navigate("/cart") : uploadCart();
                    }}
                  >
                    {alreadyAdded ? " Go To Cart" : "Add to Cart"}
                  </button>
                  {/* <button
                    type="submit"
                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Buy it now
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
