import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
    }
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  }, [productUpdateDetail]);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      {/* <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="grid grid-cols-4">
          <div className="col-span-4">
            <div className="cart-header py-3 flex justify-between items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 flex justify-between items-center"
                  >
                    <div className="cart-col-1 gap-15 flex items-center">
                      <div className="w-1/4">
                        <img
                          src="/images/watch.jpg"
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="w-3/4">
                        <p>{item?.productId?.title}</p>
                        <p>
                          Color:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">$ 100</h5>
                    </div>
                    <div className="cart-col-3 flex items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min="1"
                          max="10"
                          id=""
                        />
                      </div>
                      <div>
                        <AiFillDelete className="text-danger" />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">$ 100</h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-span-4 py-2 mt-4">
            <div className="flex justify-between items-baseline">
              <a href="/product" className="button">
                Continue To Shopping
              </a>
              <div className="flex flex-col items-end">
                <h4>SubTotal: $ 1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <a href="/checkout" className="button">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* NEW CART */}
      <section>
        <div className="  w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className=" w-full">
            <div className="cart-header py-3 flex justify-between items-center">
              <h4 className="cart-col-1">Product:</h4>
              <h4 className="cart-col-2">Price:</h4>
              <h4 className="cart-col-3">Quantity:</h4>
              <h4 className="cart-col-4">Total:</h4>
            </div>

            <div className="mt-8 ">
              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <ul key={index} className="space-y-4 mt-8">
                      <li className="flex items-center gap-4 col-span-4">
                        <div className="flex gap-4">
                          <img
                            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                            alt=""
                            className="h-16 w-16 rounded object-cover"
                          />

                          <div className=" ">
                            <h3 className="text-sm text ">
                              {item?.productId?.title}
                            </h3>

                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">XXS</dd>
                              </div>

                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">
                                  <ul className="colors ps-0 ">
                                    <li
                                      style={{
                                        backgroundColor: item?.color?.title,
                                      }}
                                    ></li>
                                  </ul>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div className="flex flex-1 items-center justify-center gap-2 ">
                          <h5 className="price">{item?.price} Da</h5>
                        </div>

                        <div className="flex flex-1 items-center justify-center gap-2 ">
                          <form>
                            <label htmlFor="Line1Qty" className="sr-only">
                              Quantity
                            </label>

                            <input
                              type="number"
                              min={1}
                              max={10}
                              value={
                                productUpdateDetail?.quantity ?? item?.quantity
                              }
                              onChange={(e) => {
                                setProductUpdateDetail({
                                  cartItemId: item?._id,
                                  quantity: e.target.value,
                                });
                              }}
                              id="Line1Qty"
                              className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />
                          </form>

                          <button
                            onClick={() => {
                              deleteACartProduct(item?._id);
                            }}
                            className="text-gray-600 transition hover:text-red-600"
                          >
                            <span className="sr-only">Remove item</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="cart-col-4">
                          <h5 className="price">
                            {item?.price * item?.quantity} Da
                          </h5>
                        </div>
                      </li>
                    </ul>
                  );
                })}

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    {(totalAmount !== null || totalAmount !== 0) && (
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd> {totalAmount} Da</dd>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="/checkout"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
