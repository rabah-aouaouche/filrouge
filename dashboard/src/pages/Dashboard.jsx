import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";

// Table of product status
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
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
// End of the table for product status

const Dashboard = () => {
  // Charts of sales
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  // end of charts of sales

  return (
    <div>
      <h3 className=" text-black">dashboard</h3>
      <div className="flex justify-between items-center gap-3">
        <div className=" flex justify-between items-end flex-grow bg-slate-200 p-3 rounded-md">
          <div>
            <p className=" mb-0">Total</p> <h3>1100DA</h3>
          </div>
          <div className=" flex flex-col items-end">
            <h6 className="flex green">
              <BsArrowDownRight /> 32%
            </h6>
            <p>Compared to April 2023</p>
          </div>
        </div>
        <div className=" flex justify-between items-end flex-grow bg-slate-200 p-3 rounded-md">
          <div>
            <p className=" mb-0">Total</p> <h3>1100DA</h3>
          </div>
          <div className=" flex flex-col items-end">
            <h6 className="flex red">
              <BsArrowDownRight /> 32%
            </h6>
            <p>Compared to April 2023</p>
          </div>
        </div>
        <div className=" flex justify-between items-end flex-grow bg-slate-200 p-3 rounded-md">
          <div>
            <p className=" mb-0">Total</p> <h3>1100DA</h3>
          </div>
          <div className=" flex flex-col items-end">
            <h6 className="flex green">
              <BsArrowDownRight /> 32%
            </h6>
            <p>Compared to April 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4"> Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4"> Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
