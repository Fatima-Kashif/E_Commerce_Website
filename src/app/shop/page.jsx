import Products from "../Components/products";
function Shop() {
  return (
    <div>

<header className="bg-[#F9F1E7] py-20 text-center h-[300px]">
  <h1 className="text-3xl font-bold mt-7">Shop</h1>
  <div className="flex items-center justify-center gap-2 mt-2">
    <p className="font-bold">Home</p>
    <img src="greaterthan.png" alt="symbol" className="w-4 h-4" />
    <p>Shop</p>
  </div>
</header>

<div className="bg-[#F9F1E7] px-4 py-6 flex flex-wrap justify-between items-center border-t border-white pt-6">
  <div className="flex items-center gap-4 md:gap-8 ml-4 md:ml-20 flex-wrap">
    <button className="p-2"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0238 3.14285H6.92857M4.54762 3.14285H0.976191M20.0238 15.0476H6.92857M4.54762 15.0476H0.976191M14.0714 9.09524H0.976191M20.0238 9.09524H16.4524M5.7381 0.761902C6.05383 0.761902 6.35663 0.887327 6.57989 1.11058C6.80315 1.33384 6.92857 1.63664 6.92857 1.95238V4.33333C6.92857 4.64906 6.80315 4.95187 6.57989 5.17512C6.35663 5.39838 6.05383 5.52381 5.7381 5.52381C5.42236 5.52381 5.11956 5.39838 4.8963 5.17512C4.67304 4.95187 4.54762 4.64906 4.54762 4.33333V1.95238C4.54762 1.63664 4.67304 1.33384 4.8963 1.11058C5.11956 0.887327 5.42236 0.761902 5.7381 0.761902V0.761902ZM5.7381 12.6667C6.05383 12.6667 6.35663 12.7921 6.57989 13.0153C6.80315 13.2386 6.92857 13.5414 6.92857 13.8571V16.2381C6.92857 16.5538 6.80315 16.8566 6.57989 17.0799C6.35663 17.3031 6.05383 17.4286 5.7381 17.4286C5.42236 17.4286 5.11956 17.3031 4.8963 17.0799C4.67304 16.8566 4.54762 16.5538 4.54762 16.2381V13.8571C4.54762 13.5414 4.67304 13.2386 4.8963 13.0153C5.11956 12.7921 5.42236 12.6667 5.7381 12.6667ZM15.2619 6.71428C15.5776 6.71428 15.8804 6.83971 16.1037 7.06297C16.327 7.28622 16.4524 7.58903 16.4524 7.90476V10.2857C16.4524 10.6014 16.327 10.9042 16.1037 11.1275C15.8804 11.3508 15.5776 11.4762 15.2619 11.4762C14.9462 11.4762 14.6434 11.3508 14.4201 11.1275C14.1969 10.9042 14.0714 10.6014 14.0714 10.2857V7.90476C14.0714 7.58903 14.1969 7.28622 14.4201 7.06297C14.6434 6.83971 14.9462 6.71428 15.2619 6.71428V6.71428Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
    <p className="text-sm md:text-base">Filter</p>
    <button className="p-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6667 17.1667C12.7384 17.1667 11.8482 16.7979 11.1918 16.1416C10.5354 15.4852 10.1667 14.5949 10.1667 13.6667C10.1667 12.7384 10.5354 11.8482 11.1918 11.1918C11.8482 10.5354 12.7384 10.1667 13.6667 10.1667C14.5949 10.1667 15.4852 10.5354 16.1415 11.1918C16.7979 11.8482 17.1667 12.7384 17.1667 13.6667C17.1667 14.5949 16.7979 15.4852 16.1415 16.1416C15.4852 16.7979 14.5949 17.1667 13.6667 17.1667ZM4.33334 17.1667C3.40508 17.1667 2.51484 16.7979 1.85846 16.1416C1.20208 15.4852 0.833336 14.5949 0.833336 13.6667C0.833336 12.7384 1.20208 11.8482 1.85846 11.1918C2.51484 10.5354 3.40508 10.1667 4.33334 10.1667C5.26159 10.1667 6.15183 10.5354 6.80821 11.1918C7.46459 11.8482 7.83334 12.7384 7.83334 13.6667C7.83334 14.5949 7.46459 15.4852 6.80821 16.1416C6.15183 16.7979 5.26159 17.1667 4.33334 17.1667ZM13.6667 7.83334C12.7384 7.83334 11.8482 7.4646 11.1918 6.80822C10.5354 6.15184 10.1667 5.2616 10.1667 4.33334C10.1667 3.40509 10.5354 2.51485 11.1918 1.85847C11.8482 1.20209 12.7384 0.833344 13.6667 0.833344C14.5949 0.833344 15.4852 1.20209 16.1415 1.85847C16.7979 2.51485 17.1667 3.40509 17.1667 4.33334C17.1667 5.2616 16.7979 6.15184 16.1415 6.80822C15.4852 7.4646 14.5949 7.83334 13.6667 7.83334ZM4.33334 7.83334C3.40508 7.83334 2.51484 7.4646 1.85846 6.80822C1.20208 6.15184 0.833336 5.2616 0.833336 4.33334C0.833336 3.40509 1.20208 2.51485 1.85846 1.85847C2.51484 1.20209 3.40508 0.833344 4.33334 0.833344C5.26159 0.833344 6.15183 1.20209 6.80821 1.85847C7.46459 2.51485 7.83334 3.40509 7.83334 4.33334C7.83334 5.2616 7.46459 6.15184 6.80821 6.80822C6.15183 7.4646 5.26159 7.83334 4.33334 7.83334Z" fill="black"/>
</svg></button>
    <button className="p-2"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.75H18.5C19.2956 4.75 20.0587 5.06607 20.6213 5.62868C21.1839 6.19129 21.5 6.95435 21.5 7.75V12.25C21.5 13.0456 21.1839 13.8087 20.6213 14.3713C20.0587 14.9339 19.2956 15.25 18.5 15.25H3.5C2.70435 15.25 1.94129 14.9339 1.37868 14.3713C0.816071 13.8087 0.5 13.0456 0.5 12.25V7.75C0.5 6.95435 0.816071 6.19129 1.37868 5.62868C1.94129 5.06607 2.70435 4.75 3.5 4.75ZM3.5 6.25C3.10218 6.25 2.72064 6.40804 2.43934 6.68934C2.15804 6.97064 2 7.35218 2 7.75V12.25C2 12.6478 2.15804 13.0294 2.43934 13.3107C2.72064 13.592 3.10218 13.75 3.5 13.75H18.5C18.8978 13.75 19.2794 13.592 19.5607 13.3107C19.842 13.0294 20 12.6478 20 12.25V7.75C20 7.35218 19.842 6.97064 19.5607 6.68934C19.2794 6.40804 18.8978 6.25 18.5 6.25H3.5ZM0.5 1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H20.75C20.9489 0.25 21.1397 0.329018 21.2803 0.46967C21.421 0.610322 21.5 0.801088 21.5 1C21.5 1.19891 21.421 1.38968 21.2803 1.53033C21.1397 1.67098 20.9489 1.75 20.75 1.75H1.25C1.05109 1.75 0.860322 1.67098 0.71967 1.53033C0.579018 1.38968 0.5 1.19891 0.5 1ZM0.5 19C0.5 18.8011 0.579018 18.6103 0.71967 18.4697C0.860322 18.329 1.05109 18.25 1.25 18.25H20.75C20.9489 18.25 21.1397 18.329 21.2803 18.4697C21.421 18.6103 21.5 18.8011 21.5 19C21.5 19.1989 21.421 19.3897 21.2803 19.5303C21.1397 19.671 20.9489 19.75 20.75 19.75H1.25C1.05109 19.75 0.860322 19.671 0.71967 19.5303C0.579018 19.3897 0.5 19.1989 0.5 19Z" fill="black"/>
</svg></button>
    <img src="Line 5.png" alt="line" className="hidden md:block" />
  </div>
  <div className="flex items-center gap-4 mt-4 md:mt-0 flex-wrap">
    <p className="text-sm md:text-base">Show</p>
    <div className="border border-gray-300 px-4 py-2 bg-white text-gray-400 text-sm md:text-base">
      16
    </div>
    <p className="text-sm md:text-base">Sort by</p>
    <div className="border border-gray-300 px-8 py-2 md:py-3 bg-white text-gray-400 text-sm md:text-base">
      Default
    </div>
  </div>
</div>


      <div className="flex flex-wrap justify-center gap-4 m-12">
          {/* I made a component and passing the params from here for reusability and called the component here */}
         <Products  img="showpiece.png"
         product_name="Syltherine"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="chair.png"
         product_name="Leviosa"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="white_sofa.png"
         product_name="Lolito"
         desc="Luxury big sofa"
         price="7.000.000"/>
         <Products  img="lounge.png"
         product_name="Respira"
         desc="Outdoor bar table and stool"
         price=" 500.000"/>
         <Products  img="showpiece.png"
         product_name="Syltherine"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="chair.png"
         product_name="Leviosa"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="white_sofa.png"
         product_name="Lolito"
         desc="Luxury big sofa"
         price="7.000.000"/>
         <Products  img="lounge.png"
         product_name="Respira"
         desc="Outdoor bar table and stool"
         price=" 500.000"/>
         <Products  img="showpiece.png"
         product_name="Syltherine"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="chair.png"
         product_name="Leviosa"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="white_sofa.png"
         product_name="Lolito"
         desc="Luxury big sofa"
         price="7.000.000"/>
         <Products  img="lounge.png"
         product_name="Respira"
         desc="Outdoor bar table and stool"
         price=" 500.000"/>
         <Products  img="showpiece.png"
         product_name="Syltherine"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="chair.png"
         product_name="Leviosa"
         desc="Stylish cafe chair"
         price="2.500.000"/>
         <Products  img="white_sofa.png"
         product_name="Lolito"
         desc="Luxury big sofa"
         price="7.000.000"/>
         <Products  img="lounge.png"
         product_name="Respira"
         desc="Outdoor bar table and stool"
         price=" 500.000"/>
    </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">1</button>
        <button className="px-4 py-2 bg-[#F9F1E7] rounded">2</button>
        <button className="px-4 py-2 bg-[#F9F1E7] rounded">3</button>
        <button className="px-4 py-2 bg-[#F9F1E7] rounded">Next</button>
      </div>

      {/* <footer className="bg-black text-white py-20 mt-12">
        <div className="flex justify-evenly">
        <div className="flex gap-2 items-center justify-center ">
          <img src="reward.png" alt="trophy" />
          <div className="flex flex-col ">
          <h2 className="text-[#B88E2F] text-xl font-bold ">High Quality</h2>
    <p className="text-[#B6B6B6]">crafted from top materials</p>
          </div>
          </div>
        <div className="flex gap-2 items-center justify-center">
          <img src="check.png" alt="verify" />
          <div className="flex flex-col">
          <h2 className="text-xl font-bold text-[#B88E2F]">Warranty Protection</h2>
          <p className="text-[#B6B6B6]">Over 2 years</p>
          </div>
          </div>
        <div className="flex gap-2 items-center justify-center">
          <img src="support.png" alt="trophy" />
          <div className="flex flex-col">
          <h2 className="text-[#B88E2F] text-xl font-bold">Free Shipping</h2>
          <p className="text-[#B6B6B6]">Order over 150 $</p>
          </div>
          </div>
        <div className="flex gap-2 items-center justify-center">
          <img src="call.png" alt="trophy" />
          <div className="flex flex-col">
          <h2 className="text-[#B88E2F] text-xl font-bold ">24 / 7 Support</h2>
          <p className="text-[#B6B6B6]">Dedicated support</p>
          </div>
          </div>
          
        </div>
      </footer> */}
      <footer className="bg-black text-white py-20 mt-12">
  <div className="flex flex-wrap justify-center gap-8 md:gap-16">
    <div className="flex gap-4 items-center justify-start max-w-xs">
      <img src="reward.png" alt="trophy" className="w-10 h-10 md:w-12 md:h-12" />
      <div className="flex flex-col">
        <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">High Quality</h2>
        <p className="text-[#B6B6B6] text-sm md:text-base">Crafted from top materials</p>
      </div>
    </div>
    <div className="flex gap-4 items-center justify-start max-w-xs">
      <img src="check.png" alt="verify" className="w-10 h-10 md:w-12 md:h-12" />
      <div className="flex flex-col">
        <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">Warranty Protection</h2>
        <p className="text-[#B6B6B6] text-sm md:text-base">Over 2 years</p>
      </div>
    </div>
    <div className="flex gap-4 items-center justify-start max-w-xs">
      <img src="support.png" alt="support" className="w-10 h-10 md:w-12 md:h-12" />
      <div className="flex flex-col">
        <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">Free Shipping</h2>
        <p className="text-[#B6B6B6] text-sm md:text-base">Order over $150</p>
      </div>
    </div>
    <div className="flex gap-4 items-center justify-start max-w-xs">
      <img src="call.png" alt="support" className="w-10 h-10 md:w-12 md:h-12" />
      <div className="flex flex-col">
        <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">24 / 7 Support</h2>
        <p className="text-[#B6B6B6] text-sm md:text-base">Dedicated support</p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Shop;
