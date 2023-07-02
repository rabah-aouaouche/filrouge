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
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper py-5  ">
        <div className="max-w-full mx-auto ">
          <div className="flex flex-wrap   ">
            <div className="w-full md:w-1/4">
              <div className="filter-card mb-3 m-2">
                <h3 className="filter-title"> Shop By Categories</h3>
                <div>
                  <ul className=" ps-0 ">
                    <li>T-shirt</li>
                    <li>Jeans</li>
                    <li>baskets</li>
                    <li>sunglasses</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3 m-2">
                <h3 className="filter-title"> Filter By</h3>
                <div>
                  <h5 className="sub-title"> Availablity</h5>
                  <div>
                    <div>
                      <div className="form-check flex items-center gap-1">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          In Stock (1)
                        </label>
                      </div>
                      <div className="form-check flex items-center gap-1">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Out of Stock(0)
                        </label>
                      </div>
                    </div>
                  </div>
                  <h5 className="sub-title"> Price</h5>
                  <div className="flex items-center gap-2">
                    <div className="form-control w-full max-w-xs h-16">
                      <label className="label">
                        <span className="label-text">From:</span>
                      </label>
                      <input
                        type="text"
                        placeholder="..Da"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="form-control w-full max-w-xs h-16">
                      <label className="label">
                        <span className="label-text">To:</span>
                      </label>
                      <input
                        type="text"
                        placeholder="..Da"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <h5 className="sub-title"> Colors</h5>
                  <div className="flex flex-wrap ">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title"> Size</h5>
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
              <div className="filter-card mb-3 m-2">
                <h3 className="filter-title"> Product Tags</h3>
                <div>
                  <div className="product-tags flex flex-wrap items-center gap-2">
                    <span className="badge bg-slate-400 rounded-lg py-3 px-3">
                      T-shirt
                    </span>
                    <span className="badge bg-slate-400 rounded-lg py-3 px-3">
                      Chemise
                    </span>
                    <span className="badge bg-slate-400 rounded-lg py-3 px-3">
                      Jeans
                    </span>
                    <span className="badge bg-slate-400 rounded-lg py-3 px-3">
                      underwear
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3 m-2">
                <h3 className="filter-title"> Random Product</h3>
                <div className="">
                  <div className="random-products flex gap-2 justify-center border-grey border-b-2 pb-2  ">
                    <div className=" w-32">
                      <img src="images/caroussel1.png" className="" alt="" />
                    </div>
                    <div className=" w-32 m-0 flex flex-col justify-between ">
                      <h5 className=" text-md font-medium mb-0">
                        Zara summer polo
                      </h5>
                      <div>
                        <ReactStars
                          count={5}
                          size={20}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b className=" text-xs">2000da</b>
                      </div>
                    </div>
                  </div>
                  <div className="random-products flex gap-2 justify-center  pt-2  ">
                    <div className=" w-32">
                      <img src="images/caroussel1.png" className="" alt="" />
                    </div>
                    <div className=" w-32 m-0 flex flex-col justify-between ">
                      <h5 className=" text-md font-medium mb-0">
                        Zara summer polo
                      </h5>
                      <div>
                        <ReactStars
                          count={5}
                          size={20}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b className=" text-xs">2000da</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <div className="filter-sort-grid ml-2 mr-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <p className=" mb-0">Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className=" flex items-center gap-2">
                    <p className="totalproducts"> 21 Products</p>
                    <div className="flex gap-2 items-center gridd">
                      <img
                        onClick={() => setGrid(3)}
                        src="/images/gr4.svg"
                        className="block"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGrid(4)}
                        src="/images/gr3.svg"
                        className="block"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGrid(6)}
                        src="/images/gr2.svg"
                        className="block"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGrid(12)}
                        src="/images/gr.svg"
                        className="block"
                        alt="grid"
                      />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
