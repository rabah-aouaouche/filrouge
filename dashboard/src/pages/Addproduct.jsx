import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/productcategory/ProductcategorySlice";
import { getColors } from "../features/color/colorSlice";
import { Select } from "antd";
import { toast } from "react-toastify";

import "react-widgets/styles.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { createProducts, resetState } from "../features/product/ProductSlice";
import "react-toastify/dist/ReactToastify.css";

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  tags: yup.string().required("Tag is Required"),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: yup.number().required("Quantity is Required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, []);
  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector(
    (state) => state.productcategory.pCategories
  );
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;
  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product Added Successfullly!");
    }
    if (isError) {
      Toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });

  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
  }, [color, img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        navigate("/admin/list-product");
      }, 3000);
    },
  });

  const handleColors = (e) => {
    setColor(e);
    console.log(color);
  };
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          {/* Prodct title */}
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Enter Product Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Product Title"
              className="input input-bordered input-warning w-full max-w-xs bg-white"
              value={formik.values.title}
              name="title"
              onChange={formik.handleChange("title")}
              onBlur={formik.handleChange("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className=" text-red-700">{formik.errors.title}</div>
            ) : null}
          </div>
          {/* Product description */}
          <ReactQuill
            className="bg-white border border-warning"
            theme="snow"
            value={formik.values.description}
            name="description"
            onChange={formik.handleChange("description")}
          />
          <div>
            {formik.touched.description && formik.errors.description ? (
              <div className=" text-red-700">{formik.errors.description}</div>
            ) : null}
          </div>
          {/* product price */}
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Enter Product Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              className="input input-bordered input-warning w-full max-w-xs bg-white"
              value={formik.values.price}
              name="price"
              onChange={formik.handleChange("price")}
              onBlur={formik.handleChange("price")}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className=" text-red-700">{formik.errors.price}</div>
            ) : null}
          </div>
          <div className="flex gap-5">
            {/* Select brand */}
            <div>
              <select
                id=""
                className=" bg-white rounded-md px-6 border border-warning  mr-2"
                value={formik.values.brand}
                name="brand"
                onChange={formik.handleChange("brand")}
                onBlur={formik.handleChange("brand")}
              >
                <option value="">Select Brand</option>
                {brandState.map((i, j) => {
                  return (
                    <option key={j} value={i.title}>
                      {i.title}
                    </option>
                  );
                })}
              </select>
              {formik.touched.brand && formik.errors.brand ? (
                <div className=" text-red-700 mb-5">{formik.errors.brand}</div>
              ) : null}
            </div>
            {/* Select category */}
            <div>
              <select
                id=""
                className=" bg-white rounded-md px-6 border border-warning  mr-2"
                value={formik.values.category}
                name="category"
                onChange={formik.handleChange("category")}
                onBlur={formik.handleChange("category")}
              >
                <option value="">Select Category</option>
                {categoryState.map((i, j) => {
                  return (
                    <option key={j} value={i.title}>
                      {i.title}
                    </option>
                  );
                })}
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className=" text-red-700 mb-2">
                  {formik.errors.category}
                </div>
              ) : null}
            </div>
          </div>

          {/* Select a tags */}

          <div>
            <label className="label">
              <span className="label-text text-warning">Select tags :</span>
            </label>
            <select
              name="tags"
              onChange={formik.handleChange("tags")}
              onBlur={formik.handleBlur("tags")}
              value={formik.values.tags}
              className="form-control py-3 mb-3"
              id=""
            >
              <option value="" disabled>
                Select Tags
              </option>
              <option value="featured">Featured</option>
              <option value="popular">Popular</option>
              <option value="special">Special</option>
            </select>

            {formik.touched.tags && formik.errors.tags ? (
              <div className=" text-red-700">{formik.errors.tags}</div>
            ) : null}
          </div>

          {/* Select colors */}
          <div>
            <label className="label">
              <span className="label-text text-warning">Select a color :</span>
            </label>
            <Select
              mode="multiple"
              allowClear
              className="w-full"
              placeholder="Select colors"
              defaultValue={color}
              onChange={(i) => handleColors(i)}
              options={coloropt}
            />
            {formik.touched.color && formik.errors.color ? (
              <div className=" text-red-700">{formik.errors.color}</div>
            ) : null}
          </div>

          {/* product quantity */}
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Enter Product Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Enter Product Quantity"
              className="input input-bordered input-warning w-full max-w-xs bg-white"
              value={formik.values.quantity}
              name="quantity"
              onChange={formik.handleChange("quantity")}
              onBlur={formik.handleChange("quantity")}
            />
            {formik.touched.quantity && formik.errors.quantity ? (
              <div className=" text-red-700">{formik.errors.quantity}</div>
            ) : null}
          </div>
          {/* upload img */}
          <div className="bg-white border  p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className=" absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button type="submit" className="btn btn-outline btn-warning my-5 ">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
