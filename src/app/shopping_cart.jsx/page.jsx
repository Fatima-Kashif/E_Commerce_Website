// import React, { useState } from "react";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// const Shopping_Cart = () => {
  
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Asgaard sofa",
//       price: 250000,
//       quantity: 1,
//       image: "cartitem_1.png", 
//     },
//     {
//       id: 2,
//       name: "Casaliving Wood",
//       price: 270000,
//       quantity: 1,
//       image: "cartitem_2.png", 
//     },
//   ]);

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <Sheet>
//       <SheetTrigger>
//         <button className=" border-2 border-black rounded-lg px-8 p-3 ">Add to Cart</button>
//       </SheetTrigger>
//       <SheetContent className="font-custom w-[400px] sm:w-[540px]">
//         <SheetHeader>
//           <SheetTitle className="text-2xl font-bold m-2 ">Shopping Cart</SheetTitle>
//         </SheetHeader>
//         <div className="border-b-2 mt-4"></div>
//         <div className="mt-4 space-y-4">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between pb-4"
//               >
//                 <div className="flex items-center gap-4 py-5 h-30">
                  
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className=" rounded-md mr-4"
//                   />
//                   <div>
//                     <p className="">{item.name}</p>
//                     <br />
//                     <p className="text-sm">
//                       {item.quantity}   <span className="px-2">x</span>   <span className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</span>
//                     </p>
//                     </div>
//                   </div>
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="text-gray-500 hover:text-red-500"
//                 >
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F"/>
// </svg>

//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">Your cart is empty.</p>
//           )}
//         </div>

     
//         <div className="mt-6">
//           <div className="flex justify-between text-lg">
//             <span>Subtotal</span>
//             <span className="text-[#B88E2F] font-semibold">Rs. {subtotal.toLocaleString()}</span>
//           </div>
//           <div className="border-b-2 mt-5"></div>
//         </div>

      
//         <div className="mt-6 flex gap-5">
//         <Link href="/cart">
//             <button className="border border-black rounded-3xl px-10 py-2">
//               Cart
//             </button>
//           </Link>
//           <Link href="/checkout">
//             <button className="border border-black rounded-3xl px-6 py-2">
//               Checkout
//             </button>
//           </Link>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default Shopping_Cart;
import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

const Shopping_Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "cartitem_1.png",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      quantity: 1,
      image: "cartitem_2.png",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger>
        <button className="border-2 border-black rounded-lg px-8 py-3">Add to Cart</button>
      </SheetTrigger>
      <SheetContent className="font-custom w-full sm:w-[540px] lg:w-[600px]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold m-2">Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="border-b-2 mt-4"></div>
        <div className="mt-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between pb-4 gap-4 flex-wrap"
              >
                <div className="flex items-center gap-4 py-5 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-md w-20 h-20 sm:w-24 sm:h-24"
                  />
                  <div className="flex-1">
                    <p>{item.name}</p>
                    <br />
                    <p className="text-sm">
                      {item.quantity} <span className="px-2">x</span>{" "}
                      <span className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-500 hover:text-red-500 mt-2 sm:mt-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
                      fill="#9F9F9F"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-lg">
            <span>Subtotal</span>
            <span className="text-[#B88E2F] font-semibold">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="border-b-2 mt-5"></div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-5">
          <Link href="/cart">
            <button className="border border-black rounded-3xl px-10 py-2 w-full sm:w-auto">
              Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="border border-black rounded-3xl px-6 py-2 w-full sm:w-auto">
              Checkout
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Shopping_Cart;
