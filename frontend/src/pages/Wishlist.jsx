import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { GiCrossedBones } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlistState && wishlistState.length === 0 && (
              <>
                <div className="text-center text-lg font-bold mt-36 mb-40">
                  <p>- No Data -</p>
                  <p>- No Data -</p>
                  <p>- No Data -</p>
                </div>
                <div className="text-center text-lg font-bold mt-36 mb-40">
                  <p>- No Data -</p>
                  <p>- No Data -</p>
                  <p>- No Data -</p>
                </div>
                <div className="text-center text-lg font-bold mt-36 mb-40">
                  <p>- No Data -</p>
                  <p>- No Data -</p>
                  <p>- No Data -</p>
                </div>
              </>
            )}
            {wishlistState &&
              wishlistState?.map((item, index) => {
                return (
                  <div className="col-span-1" key={index}>
                    <div className="wishlist-card relative flex flex-col justify-between">
                      <div className="absolute top-3 right-3 w-6 h-6 cursor-pointer">
                        <GiCrossedBones
                          onClick={() => {
                            removeFromWishlist(item?._id);
                          }}
                          className=" w-6 h-6 cursor-pointer"
                        />
                        <Link
                          to={"/product/" + item?._id}
                          className="mt-3 ml-1 border-0 bg-transparent w-6 h-6 cursor-pointer"
                        >
                          <img src="/images/view.svg" alt="view" />
                        </Link>
                      </div>

                      <div className="wishlist-card-image">
                        {item?.images && item.images[0] && (
                          <img
                            src={
                              item?.images[0].url
                                ? item?.images[0].url
                                : "images/watch.jpg"
                            }
                            className="w-full"
                            alt="watch"
                          />
                        )}
                      </div>
                      <div className="py-3 px-3">
                        <h5 className="title text-base font-medium">
                          {item?.title}
                        </h5>
                        <h6 className="price text-base font-normal">
                          {item?.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
