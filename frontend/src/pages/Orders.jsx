import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );
  console.log(orderState);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      <div className="container p-2 mx-auto sm:p-4 text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leadi text-gray-500 ">
          My Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3">#</th>

                <th className="p-3">Order Id</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Total Amount After Discount</th>
                <th className="p-3">Status</th>
                {/* <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <tbody
                    key={index}
                    className="  border-2 bg-gray-900 border-gray-200"
                  >
                    <tr className="">
                      <td className="px-3  font-medium text-gray-400">
                        {index + 1}
                      </td>
                      <td className="px-3  font-medium text-gray-400">
                        {item?._id}
                      </td>
                      <td className="px-3 py-2">
                        <p>{item?.totalPrice} Da</p>
                      </td>
                      <td className="px-3 py-2">
                        <span>{item?.totalPriceAfterDiscount} Da</span>
                        <p className="text-gray-400">after discount</p>
                      </td>
                      <td className="px-3 py-2">
                        <p>{item?.orderStaus}</p>
                      </td>
                      {/* <td className="px-3 py-2">
                  <p>dwight@adams.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                  <p className="text-gray-400">United Kingdom</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full text-gray-600 hover:bg-gray-700 focus:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td> */}
                    </tr>

                    <tr className="bg-gray-900">
                      <th className="p-3"></th>

                      <th className="p-3 font-normal  text-[#d97b3e]">
                        Product Name :
                      </th>
                      <th className="p-3 font-normal  text-[#d97b3e]">
                        quantity :
                      </th>
                      <th className="p-3 font-normal  text-[#d97b3e]">
                        Price :
                      </th>
                      <th className="p-3 font-normal  text-[#d97b3e]">
                        Color :
                      </th>
                      {/* <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">
                  <span className="sr-only">Edit</span>
                </th> */}
                    </tr>

                    {item?.orderItems?.map((i, index) => {
                      return (
                        <tr className=" bg-gray-900">
                          <td className="px-3  font-medium text-gray-400">-</td>

                          <td className="px-3  font-medium text-gray-400">
                            <p>{i?.product?.title}</p>
                          </td>
                          <td className="px-3 py-2">
                            <p>{i?.quantity}</p>
                          </td>
                          <td className="px-3 py-2">
                            <p>{i?.product?.price}</p>
                          </td>
                          <td className="px-3 py-2">
                            <p>
                              <ul className="colors ps-0 ">
                                <li
                                  style={{
                                    backgroundColor: i?.color?.title,
                                  }}
                                ></li>
                              </ul>
                            </p>
                          </td>
                          {/* <td className="px-3 py-2">
                  <p>dwight@adams.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                  <p className="text-gray-400">United Kingdom</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full text-gray-600 hover:bg-gray-700 focus:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
