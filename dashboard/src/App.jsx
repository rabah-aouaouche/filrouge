import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colors from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addblog from "./pages/Addblog";
import Addblogcat from "./pages/Addblogcat";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import Couponlist from "./pages/couponlist";
import AddCoupon from "./pages/AddCoupon";
import ViewEnq from "./pages/ViewEnq";
import ViewOrder from "./pages/ViewOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="enquiries/:id" element={<ViewEnq />} />
            <Route path="blog-list" element={<Bloglist />} />
            <Route path="blog-category-list" element={<Blogcatlist />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id" element={<ViewOrder />} />
            <Route path="customers" element={<Customers />} />
            <Route path="colors-list" element={<Colors />} />
            <Route path="list-category" element={<Categorylist />} />
            <Route path="list-brand" element={<Brandlist />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="add-blog" element={<Addblog />} />
            <Route path="add-blog/:id" element={<Addblog />} />

            <Route path="add-blog-category" element={<Addblogcat />} />
            <Route path="add-blog-category/:id" element={<Addblogcat />} />
            <Route path="color" element={<Addcolor />} />
            <Route path="color/:id" element={<Addcolor />} />

            <Route path="category" element={<Addcat />} />
            <Route path="category/:id" element={<Addcat />} />
            <Route path="brand" element={<Addbrand />} />
            <Route path="brand/:id" element={<Addbrand />} />
            <Route path="product" element={<Addproduct />} />
            <Route path="coupon-list" element={<Couponlist />} />
            <Route path="coupon" element={<AddCoupon />} />
            <Route path="coupon/:id" element={<AddCoupon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
