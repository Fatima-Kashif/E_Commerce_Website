import React from "react";

const CheckoutForm = () => {
  return (
<div className="font-custom">
    
    <div className="ml-40 mb-72">
<h1 className="text-4xl font-semibold mb-6  ">Checkout</h1>
        <div className="flex items-center gap-6 mt-2  ">
          <p className="font-semibold">Home</p>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
          </svg>

          <p >Checkout</p>
          </div>
         
          <p className="text-4xl mt-40 font-semibold">Billing Details</p>
          <div className="flex gap-2 mt-14">
          <div className="flex-col gap-5">
          <div className="flex gap-5">
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">First Name</p>
            <input type="text" className="h-5 w-43 border-2 p-8 rounded-lg mt-6 " />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Last Name</p>
            <input type="text" className="h-5 w-43 border-2 p-8 rounded-lg mt-6 " />
          </div>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Company Name (Optional)</p>
            <input type="text" className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 " />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Country / Reigon</p>
            <select name="Country/Reigon"  className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 text-[#9F9F9F] ">
            <option value="Sri lanka" className="text-[#9F9F9F]" >Sri Lanka</option>
            <option value="Pakistan" className="text-[#9F9F9F]">Pakistan</option>
            <option value="UK" className="text-[#9F9F9F]">United Kingdom</option>
            <option value="USA" className="text-[#9F9F9F]">America</option>
            </select>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Town / City</p>
            <input type="text" className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 " />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Province</p>
            <select name="Country/Reigon"  className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 text-[#9F9F9F] ">
            <option value="Sri lanka" className="text-[#9F9F9F]"  >Western Province</option>
            <option value="Pakistan" className="text-[#9F9F9F]">Central Province</option>
            <option value="UK" className="text-[#9F9F9F]">Eastern Province</option>
            <option value="USA" className="text-[#9F9F9F]">Southern Province</option>
            </select>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">ZIP code</p>
            <input type="text" className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 " />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Phone</p>
            <input type="phone" className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 " />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-lg mt-10">Email Address</p>
            <input type="text" className="h-5 w-[500px] border-2 p-8 rounded-lg mt-6 " />
          </div>
          
          <div className="flex flex-col justify-start">
            <input type="text" placeholder="Additional Information" className="h-5 w-[500px] border-2 p-8 rounded-lg mt-14 " />
          </div>
          
            
          </div>
          
         
          <div className="max-w-2xl mx-auto p-6 bg-white w-104 ">
      <div className="border-b pb-4">
        <div className="flex justify-between font-semibold text-2xl">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
            <div className="mt-4 flex justify-between "> 
                <p>
          <span className="text-[#9F9F9F]">
            Asgaard sofa </span> <span className="text-sm "> x 1</span>
            </p>
          <span>Rs. 250,000.00</span>
          
        </div>
        <div className="mt-6 font-light flex justify-between ">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="mt-6 flex justify-between ">
          <span>Total</span>
          <span className="text-yellow-600 text-2xl font-bold">Rs. 250,000.00</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="mt-4 space-y-4">
            <div className="flex gap-3 items-center">
          <button className="h-3 w-3 bg-black rounded-full"></button>
          <p>Direct Bank Transfer</p>
          </div>
          <p className="mt-2 text-[#9F9F9F] text-justify ">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="pt-6">
          <label className="flex items-start space-x-3">
            <input
              type="radio"
              name="payment"
              className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
            />
            <div>
              <span className="font-medium text-[#9F9F9F]">Direct Bank Transfer</span>
             
            </div>
          </label>

          
          <label className="flex items-center space-x-3 mt-2">
            <input
              type="radio"
              name="payment"
              className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
            />
            <span className="font-medium text-[#9F9F9F]">Cash On Delivery</span>
          </label>
          </div>
        </div>
      </div>

      <div className="mt-6 text-justify ">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <a href="#" className="font-bold">privacy policy</a>.
      </div>
<div className="flex justify-center mt-3">
      <button
        className="mt-6 w-60 px-12 py-4 border-2 text-black border-black py-2 rounded-xl hover:bg-[#000000] hover:text-white transition"
      >
        Place order
      </button>
      </div>
    </div>
    </div>
        
</div>

</div>
   
  );
};

export default CheckoutForm;
