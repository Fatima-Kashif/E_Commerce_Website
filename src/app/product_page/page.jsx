
"use client";
import { useState } from "react";
import Products from '../Components/products';
import Shopping_Cart from "../shopping_cart.jsx/page.jsx";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const handleClick = (size) => {
    setSelectedSize(size);
  };
  const [quantity, setQuantity] = useState(1);

  const handleChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="font-custom">
      <div className="bg-[#F9F1E7] px-4 py-6 flex flex-wrap justify-between items-start border-t border-white pt-6">
        <div className="flex items-center justify-center gap-6 mt-2 ml-12 pl-5">
          <p className="text-[#9F9F9F]">Home</p>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
          </svg>

          <p className="text-[#9F9F9F]">Shop</p>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
          </svg>
          <img src="Line 5.png" alt="line" className="hidden md:block" />
          <p>Asgaard Sofa</p>
        </div>
      </div>
      <div className="flex gap-12 flex-col md:flex-row">
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 mt-12 ml-20">
            <button className="w-fit">
              <img src="asg_sofa1.png" alt="sofa1" />
            </button>
            <button className="w-fit">
              <img src="asg_sofa2.png" alt="sofa2" />
            </button>
            <button className="w-fit">
              <img src="asg_sofa3.png" alt="sofa3" />
            </button>
            <button className="w-fit">
              <img src="asg_sofa4.png" alt="sofa4" />
            </button>
          </div>
          <img
            src="main_sofa.png"
            alt="main_sofa"
            className="mt-12 max-h-[500px] "
          />
        </div>

        <div className="mt-12 w-full md:w-[30%] border-black ml-10">
          <h2 className="text-4xl">Asgaard Sofa</h2>
          <p className="text-xl text-[#9F9F9F] mt-3">Rs. 250,000.00</p>
          <p className="text-gray-600 mt-14 text-justify">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <p className="text-[#9F9F9F] mt-6">Size</p>
            <div className="flex mt-3 gap-4">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className={`size-btn rounded w-8 h-8 text-center ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7] text-black"
                  }`}
                  onClick={() => handleClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm ext-[#9F9F9F]">Color</p>
            <div className="flex gap-4 mt-3">
              <button className="w-8 h-8 bg-[#816DFA] rounded-full"></button>
              <button className="w-8 h-8 bg-[#000000] rounded-full"></button>
              <button className="w-8 h-8 bg-[#B88E2F] rounded-full"></button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                className="pl-3 text-xl"
                onClick={() => handleChange("decrease")}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 text-center border-none outline-none px-1 py-3 pl-7 appearance-none"
              />
              <button
                className="pr-3 text-xl"
                onClick={() => handleChange("increase")}
              >
                +
              </button>
            </div>
            <Shopping_Cart/>
            
          </div>
          <div className="flex flex-col bg-white border-t border-gray-200 mt-12"></div>
          <div className="flex flex-col gap-3 mt-10">
            <p className="text-[#9F9F9F]">
              SKU<span className="ml-[90px]">:</span>
              <span className="ml-5">SS01</span>
            </p>
            <p className="text-[#9F9F9F]">
              Category<span className="ml-[45px]">:</span>
              <span className="ml-5">Sofas</span>
            </p>
            <p className="text-[#9F9F9F]">
              Tags<span className="ml-[82px]">:</span>
              <span className="ml-5">Sofa, Chair, Home, Shop</span>
            </p>
            <div className="flex gap-5">
              <p className="text-[#9F9F9F]">
                Share<span className="ml-[75px]">:</span>
              </p>
              <div className="flex gap-5">
              <a href="#">
                   <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white border-t border-gray-200 mt-12 mb-10"></div>
      <div className="flex justify-center gap-10">
        <button className="font-semibold">Description</button>
        <button className="text-[#9F9F9F]">Additional Information</button>
      </div>
      <div className="flex flex-col gap-5 mt-10 ml-20 mr-20 pl-20 pr-20">
        <p className="text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9F9F9F]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <img src="sofa_product.png" alt="product1" />
        <img src="sofa_product.png" alt="product2" />
      </div>

      <div className="flex flex-col bg-white border-t border-gray-200 mt-12 mb-10"></div>

      <div className="mt-12">
        <h3 className="text-2xl text-center font-500 mb-10">Related Products</h3>
        <div className="flex justify-center gap-4 mb-10">
          <Products
            img="showpiece.png"
            product_name="Syltherine"
            desc="Stylish cafe chair"
            price="2.500.000"
          />
          <Products
            img="chair.png"
            product_name="Leviosa"
            desc="Stylish cafe chair"
            price="2.500.000"
          />
          <Products
            img="white_sofa.png"
            product_name="Lolito"
            desc="Stylish sofa chair"
            price="2.500.000"
          />
           <Products  img="lounge.png"
         product_name="Respira"
         desc="Outdoor bar table and stool"
         price=" 500.000"/>
        </div>
        <div className="flex justify-center mb-20">
        <button className=' border-[#B88E2F] border-2 text-[#B88E2F] py-3 px-12'>Show more</button>
        </div>
      </div>
    </div>
  );
}








