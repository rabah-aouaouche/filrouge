import React from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/product/productSlice";

// import addcart from "../assets/images/add-cart.svg";
// import view from "../assets/images/view.svg";
// import prodcompare from "../assets/images/prodcompare.svg";
// import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";

const lol = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();
  let location = useLocation();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <div className="flex flex-wrap">
      {data &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                location.pathname == "/product" ? `gr-${grid}` : "w-1/7 "
              } `}
            >
              {/* <Link
              to={`${
                location.pathname == "/"
                  ? "/product/:id"
                  : location.pathname == "/product/:id"
                  ? "/product/:id"
                  : ":id"
              }`}
              > */}
              <div className="card-product ">
                <div className="first-content ">
                  {item?.images && item.images[0] && (
                    <img
                      src={item.images[0].url}
                      alt=""
                      className="w-full h-full object-contain rounded-xl bg-white"
                    />
                  )}
                  <div className="product-details absolute flex flex-col items-start pt-48 pr-20 ">
                    <h6 className="brand text-xs text-red-500">
                      {item?.brand}
                    </h6>
                    <h5 className="product-title text-sm font-medium ">
                      {item?.title}
                    </h5>
                    <p className="price text-sm font-semibold">
                      {item?.price} Da
                    </p>
                  </div>
                </div>
                <div className="second-content ">
                  {item?.images && item.images[0] && (
                    <img
                      src={item.images[0].url}
                      alt=""
                      className="w-full h-full object-contain rounded-xl bg-white"
                    />
                  )}
                  <div className=" absolute flex flex-col justify-end  pt-32 items-start  pl-1 pb-5">
                    <h2 className="text-black text-sm font-normal">
                      {item?.title}
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                      className="product-description text-black text-xs font-thin w-32"
                    ></p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={
                        item?.rating !== undefined ? item.rating.toString() : ""
                      }
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <div className=" flex gap-2 pl-3">
                      <button className="btn glass btn-xs">Buy now</button>
                      <button className="btn glass btn-xs">
                        Add to <AiOutlineShoppingCart className=" text-sm" />
                      </button>
                    </div>
                  </div>
                  <div className="action-bar absolute">
                    <div className="flex flex-col gap-4">
                      <button
                        className="border-0 bg-transparent"
                        onClick={() => {
                          addToWish(item?._id);
                        }}
                      >
                        <img src="/images/wish.svg" alt="wishlist" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="/images/prodcompare.svg" alt="compare" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="/images/view.svg" alt="view" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="/images/add-cart.svg" alt="addcart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          );
        })}
    </div>
  );
};

export default lol;
