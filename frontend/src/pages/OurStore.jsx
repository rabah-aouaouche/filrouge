import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product);
  // Filteer
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  // Filter States
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];
    let newColors = [];

    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
      newColors.push(element.color);
    }

    setBrands(newBrands);
    setCategories(category);
    setTags(newtags);
  }, [productState]);

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);
  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };

  // console.log(
  //   [...new Set(brands)],
  //   [...new Set(categories)],
  //   [...new Set(tags)]
  // );

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper py-5  ">
        <div className="max-w-full mx-auto ">
          <div className="flex flex-wrap   ">
            <div className="w-full md:w-1/4">
              <div className="filter-card mb-3 m-2 border-orange-600 border">
                <h3 className="filter-title"> Shop By Categories</h3>
                <div className="">
                  <ul className=" ps-0  ">
                    {categories &&
                      [...new Set(categories)].map((item, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => setCategory(item)}
                            className=" text-white uppercase"
                          >
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3 m-2 border-orange-600 border">
                <h3 className="filter-title"> Filter By</h3>
                <div>
                  <h5 className="sub-title text-white"> Price :</h5>
                  <div className="flex items-center gap-2">
                    <div className="form-control w-full max-w-xs h-16">
                      <label className="label">
                        <span className="label-text text-white">From:</span>
                      </label>
                      <input
                        type="number"
                        placeholder="..Da"
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="form-control w-full max-w-xs h-16">
                      <label className="label">
                        <span className="label-text text-white">To:</span>
                      </label>
                      <input
                        type="number"
                        placeholder="..Da"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>

                  <h5 className="sub-title text-white"> Size :</h5>
                  <div>
                    <div className="form-check flex items-center gap-1">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check flex items-center gap-1">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check flex items-center gap-1">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="color-3"
                      />
                      <label className="form-check-label" htmlFor="">
                        L (2)
                      </label>
                    </div>
                    <div className="form-check flex items-center gap-1">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="color-4"
                      />
                      <label className="form-check-label" htmlFor="">
                        XL (2)
                      </label>
                    </div>
                    <div className="form-check flex items-center gap-1">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="color-5"
                      />
                      <label className="form-check-label" htmlFor="">
                        2XL (2)
                      </label>
                    </div>
                    <div className="form-check flex items-center gap-1">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="color-6"
                      />
                      <label className="form-check-label" htmlFor="">
                        3XL (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3 m-2 border-orange-600 border">
                <h3 className="filter-title"> Product Tags</h3>
                <div>
                  <div className="product-tags flex flex-wrap items-center gap-2">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            onClick={() => setTag(item)}
                            key={index}
                            className="badge capitalize bg-violet-400 rounded-lg py-3 px-3"
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3 m-2 border-orange-600 border">
                <h3 className="filter-title"> Product Brands</h3>
                <div>
                  <div className="product-tags flex flex-wrap items-center gap-2">
                    {brands &&
                      [...new Set(brands)].map((item, index) => {
                        return (
                          <span
                            onClick={() => setBrand(item)}
                            key={index}
                            className="badge capitalize bg-violet-400 rounded-lg py-3 px-3"
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <div className="filter-sort-grid ml-2 mr-2 bg-black border-orange-600 border">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 ">
                    <p className=" mb-0 text-white">Sort By:</p>
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="title">Alphabetically, A-Z</option>
                      <option value="-title">Alphabetically, Z-A</option>
                      <option value="price">Price, low to high</option>
                      <option value="-price">Price, high to low</option>
                      <option value="createdAt">Date, old to new</option>
                      <option value="-createdAt">Date, new to old</option>
                    </select>
                  </div>
                  <div className=" flex items-center gap-2">
                    <p className="totalproducts text-white">
                      <span className=" font-bold text-white ">
                        {productState?.length ? productState?.length : 0}
                      </span>
                      products
                    </p>
                    <div className="flex gap-2 items-center gridd">
                      <img
                        onClick={() => setGrid(3)}
                        src="/images/gr3.svg"
                        className="block"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGrid(4)}
                        src="/images/gr2.svg"
                        className="block"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGrid(6)}
                        src="/images/gr.svg"
                        className="block"
                        alt="grid"
                      />

                      {/* <img
                        onClick={() => setGrid(12)}
                        src="/images/gr.svg"
                        className="block"
                        alt="grid"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="flex gap-2 pl-6 pt-5 ">
                  <ProductCard
                    data={productState ? productState : []}
                    grid={grid}
                  />
                </div>
                <nav
                  aria-label="Pagination"
                  className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100 mt-10 items-center justify-center text-center"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-current="page"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
                  >
                    ...
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
                  >
                    7
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
                  >
                    8
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700"
                  >
                    9
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
