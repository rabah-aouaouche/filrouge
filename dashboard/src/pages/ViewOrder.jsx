import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrder } from "../features/auth/AuthSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  // {
  //   title: "Action",
  //   dataIndex: "action",
  // },
];

const ViewOrder = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);

  const orderState = useSelector((state) => state?.auth?.singleorder?.orders);
  console.log(orderState);

  const data1 = [];
  for (let i = 0; i < orderState?.orderItems?.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState?.orderItems[i]?.product.title,
      brand: orderState?.orderItems[i]?.product.brand,
      count: orderState?.orderItems[i]?.quantity,
      amount: orderState?.orderItems[i]?.price,
      color: orderState?.orderItems[i]?.color?.title,
      date: orderState?.createdAt,
      // action: (
      //   <>
      //     <Link to="/" className=" fs-3 text-red-700">
      //       <BiEdit />
      //     </Link>
      //     <Link className="ms-3 fs-3 text-red-700" to="/">
      //       <AiFillDelete />
      //     </Link>
      //   </>
      // ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ViewOrder;
