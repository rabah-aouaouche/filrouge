import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-6 px-5">
          <div className="col-span-1 md:col-span-7">
            <div className="checkout-left-data border-r-2 border-black">
              <h3 className="website-name font-bold">Urban men</h3>
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <a>Information</a>
                  </li>
                  <li>Shipping</li>
                  <li>Payment</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start gap-3">
                <h4 className="title total font-semibold">
                  Contact Information:
                </h4>
                <p className="user-details total">
                  Rabah Aouaouche (rabehaou@gmail.com)
                </p>
              </div>

              <h4 className="mb-3 font-bold text-orange-600 mt-5">
                Shipping Address:
              </h4>
              <form
                action=""
                className="flex gap-12 flex-wrap justify-between md:mr-6"
              >
                <div className="w-full">
                  <select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>
                      Select a country
                    </option>
                    <option>Algeria</option>
                  </select>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="flex-grow-1">
                  <select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>
                      Select State
                    </option>
                    <option>Algeria</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="ZipCode"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <Link to="/cart" className="font-bold flex items-center">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      <button className="btn glass">
                        Continue to Shipping
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <div className="border-b pb-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-1/4 relative">
                  <span className="absolute top-0 right-0 badge bg-secondary text-white rounded-full p-2">
                    1
                  </span>
                  <img
                    className="w-full border"
                    src="/images/watch.jpg"
                    alt="product"
                  />
                </div>
                <div className="w-3/4">
                  <h5 className="total-price">gfdhgf</h5>
                  <p className="total-price">s / #agfgfd</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="total">Subtotal</h4>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="flex justify-between items-center border-b-2">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
              <div className="flex justify-between items-center pb-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 10000</h5>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-1/4 relative">
                  <span className="absolute top-0 right-0 badge bg-secondary text-white rounded-full p-2">
                    1
                  </span>
                  <img
                    className="w-full border"
                    src="/images/watch.jpg"
                    alt="product"
                  />
                </div>
                <div className="w-3/4">
                  <h5 className="total-price">gfdhgf</h5>
                  <p className="total-price">s / #agfgfd</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="total">Subtotal</h4>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="flex justify-between items-center border-b-2">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
              <div className="flex justify-between items-center pb-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 10000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
