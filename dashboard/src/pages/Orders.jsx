import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders, updateAOrder } from "../features/auth/AuthSlice";

// Table of blog list
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },

  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

// End of the table for blog list

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orderState = useSelector((state) => state?.auth?.orders?.orders);

  const data1 = [];
  for (let i = 0; i < orderState?.length; i++) {
    data1.push({
      key: i + 1,
      name:
        orderState[i]?.user?.firstname + " " + orderState[i]?.user?.lastname,
      product: (
        <Link className=" link-hover" to={`/admin/order/${orderState[i]?._id}`}>
          View Orders
        </Link>
      ),
      amount: orderState[i]?.totalPrice,
      date: new Date(orderState[i]?.createdAt).toLocaleString(),
      action: (
        <>
          {/* <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link> */}
          <div className="flex">
            <select
              name=""
              id=""
              defaultValue={orderState[i]?.orderStaus}
              onChange={(e) =>
                updateOrdersStatus(orderState[i]?._id, e.target.value)
              }
              className=" form-control select select-bordered select-xs  max-w-xs bg-transparent"
            >
              <option value="Ordered" disabled selected>
                Ordered
              </option>

              <option value="Processed">Processed</option>
              <option value="Shipped">Shipped</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>

            <Link className="ms-3 fs-3 text-danger" to="/">
              <AiFillDelete />
            </Link>
          </div>
        </>
      ),
    });
  }

  const updateOrdersStatus = (a, b) => {
    dispatch(updateAOrder({ id: a, status: b }));
  };

  return (
    <div>
      <h3 className="mb-4">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
