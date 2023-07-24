import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { VscSignOut } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} this disable right click so noone can see the codesource */
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo flex justify-center items-center bg-[#ff9922]">
          <img src="/images/logourban.png" alt="logo" className="w-1/2 " />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
              localStorage.clear();
              window.location.reload();
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="  w-6 h-6" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="w-6 h-6" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="w-6 h-6" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="w-6 h-6" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="w-6 h-6" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="w-6 h-6" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="w-6 h-6" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="w-6 h-6" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="w-6 h-6" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="w-6 h-6" />,
                  label: "Color",
                },
                {
                  key: "colors-list",
                  icon: <AiOutlineBgColors className="w-6 h-6" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="w-6 h-6" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="w-6 h-6" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="w-6 h-6" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="w-6 h-6" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="w-6 h-6" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <ImBlog className="w-6 h-6" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="w-6 h-6" />,
                  label: "Blog List",
                },
                {
                  key: "add-blog-category",
                  icon: <ImBlog className="w-6 h-6" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="w-6 h-6" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="w-6 h-6" />,
              label: "Enquiries",
            },
            {
              key: "signout",
              icon: <VscSignOut className="w-6 h-6" />,
              label: "Sign Out",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="flex justify-between ps-1 pe-5 bg-[#f9e4d1] ">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="flex gap-3 items-center">
            <div className="relative">
              <IoIosNotifications className="w-6 h-6" />
              <span className="badge bg-warning rounded-circle p-1 w-4 h-4 absolute text-black text-xs">
                3
              </span>
            </div>

            <div className="flex gap-3 items-center dropdown">
              <div>
                <img
                  className="w-12 h-12"
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0 font-bold">Rabah</h5>
                <p className="mb-0">rabehaou@gmail.com</p>
              </div>
              {/* <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-xs glass ">
                  Click
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white rounded-box w-36"
                >
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/"
                    >
                      Signout
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
