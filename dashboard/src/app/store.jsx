import "symbol-observable";
// j'ai eu un probleme redux devtools ne marcher pas du coup j'ai du installer et importer symbol-observable pour que redux et reduxDevtool match
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import CustomersReducer from "../features/customers/CustomersSlice";
import ProductReducer from "../features/product/ProductSlice";
import brandReducer from "../features/brand/brandSlice";
import ProductcategoryReducer from "../features/productcategory/ProductcategorySlice";
import colorReducer from "../features/color/colorSlice";
import blogReducer from "../features/blogs/blogSlice";
import bcategoryReducer from "../features/bcategory/bcategorySlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: CustomersReducer,
    product: ProductReducer,
    brand: brandReducer,
    productcategory: ProductcategoryReducer,
    color: colorReducer,
    blogs: blogReducer,
    bcategory: bcategoryReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer,
  },
});
