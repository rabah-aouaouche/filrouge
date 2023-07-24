import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getMonthlyData,
  getOrders,
  getYearlyData,
} from "../features/auth/AuthSlice";

// Table of product status
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Product Count",
    dataIndex: "product",
  },
  {
    title: "Total Price",
    dataIndex: "price",
  },
  {
    title: "Total Price After Discount",
    dataIndex: "dprice",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

// End of the table for product status

const Dashboard = () => {
  const dispatch = useDispatch();
  const monthlyDataState = useSelector((state) => state?.auth?.monthlyData);
  const yearlyDataState = useSelector((state) => state?.auth?.yearlyData);
  const orderState = useSelector((state) => state?.auth?.orders?.orders);

  const [dataMonthly, setDataMonthly] = useState([]);
  const [dataMonthlySales, setDataMonthlySales] = useState([]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    dispatch(getMonthlyData());
    dispatch(getYearlyData());
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let data = [];
    let monthlyOrderCount = [];
    for (let index = 0; index < monthlyDataState?.length; index++) {
      const element = monthlyDataState[index];

      data.push({
        type: monthNames[element?._id?.month],
        income: element?.amount,
      });
      monthlyOrderCount.push({
        type: monthNames[element?._id?.month],
        sales: element?.count,
      });
    }
    setDataMonthly(data);
    setDataMonthlySales(monthlyOrderCount);

    const data1 = [];
    for (let i = 0; i < orderState?.length; i++) {
      data1.push({
        key: i,
        name:
          orderState[i]?.user?.firstname + " " + orderState[i]?.user?.lastname,
        product: orderState[i]?.orderItems?.length,
        price: orderState[i]?.totalPrice,
        dprice: orderState[i]?.totalPriceAfterDiscount,
        status: orderState[i]?.orderStaus,
      });
    }

    setOrderData(data1);
  }, [monthlyDataState, yearlyDataState, orderState]);

  const config = {
    data: dataMonthly,
    xField: "type",
    yField: "income",
    color: ({ type }) => {
      return "#f97316";
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
  // end of charts of  income

  //  Chart of Sales :

  const config2 = {
    data: dataMonthlySales,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ff700d";
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
        alias: "Sales",
      },
    },
  };

  // end of charts of sales.

  return (
    <div>
      <h3 className=" text-3xl font-bold text-black uppercase">dashboard</h3>
      <div className="flex justify-between items-center gap-3">
        <div className=" flex justify-between items-end flex-grow bg-slate-200 p-3 rounded-md">
          <div>
            <p className=" mb-0 text-black">Total Income :</p>
            <h3 className=" text-center flex flex-row justify-between">
              <span className=" text-orange-600 font-semibold pr-5">
                {yearlyDataState && yearlyDataState[0]?.amount}
                DA
              </span>

              <span className="text-black">Income in Last Year From Today</span>
            </h3>
          </div>
        </div>
        <div className=" flex justify-between items-end flex-grow bg-slate-200 p-3 rounded-md">
          <div>
            <p className=" mb-0 text-black">Total Sales :</p>
            <h3 className=" text-center flex flex-row justify-between">
              <span className="text-orange-600 font-semibold pr-5">
                {yearlyDataState && yearlyDataState[0]?.count}
              </span>

              <span className="text-black"> Sales in Last Year From Today</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4 text-2xl font-bold text-black uppercase">
          {" "}
          Income Statics
        </h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4 text-2xl font-bold text-black uppercase">
          Sales Statics
        </h3>
        <div>
          <Column {...config2} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4 text-2xl font-bold text-black uppercase">
          Recent Orders
        </h3>
        <div>
          <Table columns={columns} dataSource={orderData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
