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

const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();
  let location = useLocation();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <div className="flex flex-wrap gap-24 ">
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
                          <img src="/images/wish.svg" alt="wishlist" />
                        </button>

                        <Link
                          to={"/product/" + item?._id}
                          className="border-0 bg-transparent"
                        >
                          <img src="/images/view.svg" alt="view" />
                        </Link>
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
                        item?.rating !== undefined ? item.rating.toString() : ""
                      }
                      edit={false}
                      activeColor="#ffd700"
                    />
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

export default ProductCard;
