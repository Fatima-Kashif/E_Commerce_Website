"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useAppSelector } from "../../lib/store/hooks";
import { useAppDispatch } from "../../lib/store/hooks";
import { remove } from "../../lib/store/features/cart/cart";

const Shopping_Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items); 
  const dispatch = useAppDispatch();

  const removeItem = (id) => {
    dispatch(remove(id)); 
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price ,
    0
  );
  return (
    <Sheet>
      <SheetTrigger>
        <button >
            <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2356 16.1926H7.95237L8.76995 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2895 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8765 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.3771 2.07308 24.2383 2.07227L6.95706 2.01484L6.8094 1.32031C6.71643 0.877344 6.31721 0.554688 5.86331 0.554688H1.6387C1.3827 0.554688 1.13719 0.656381 0.956172 0.837398C0.775156 1.01841 0.673462 1.26393 0.673462 1.51992C0.673462 1.77592 0.775156 2.02143 0.956172 2.20245C1.13719 2.38346 1.3827 2.48516 1.6387 2.48516H5.08127L5.72659 5.55312L7.31526 13.2449L5.26995 16.5836C5.16373 16.727 5.09975 16.8972 5.08526 17.075C5.07076 17.2528 5.10632 17.4312 5.18791 17.5898C5.35198 17.9152 5.68284 18.1203 6.04924 18.1203H7.76643C7.40035 18.6065 7.20261 19.1988 7.20315 19.8074C7.20315 21.3551 8.46096 22.6129 10.0086 22.6129C11.5563 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.0921 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.8981 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1403 18.1203H24.2383C24.7688 18.1203 25.2035 17.6883 25.2035 17.1551C25.202 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2356 16.1926ZM7.35901 3.91797L23.1035 3.96992L21.5613 12.6051L9.19377 12.627L7.35901 3.91797ZM10.0086 20.6715C9.53284 20.6715 9.14456 20.2832 9.14456 19.8074C9.14456 19.3316 9.53284 18.9434 10.0086 18.9434C10.4844 18.9434 10.8727 19.3316 10.8727 19.8074C10.8727 20.0366 10.7816 20.2564 10.6196 20.4184C10.4576 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.8981 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.8981 18.9434C19.3739 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.5091 20.4184C19.347 20.5805 19.1272 20.6715 18.8981 20.6715Z" fill="black"/>
</svg>
<span className="absolute top-7 right-10 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">
       {cartItems.length}
    </span>
            </button>
      </SheetTrigger>
      <SheetContent className="font-custom w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-4">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold m-2">Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="border-b-2 mt-4"></div>
        <div className="mt-4 space-y-4  max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="lex flex-wrap items-center justify-between pb-4 gap-4"
              >
                <div className="flex items-center gap-4 py-5 w-full sm:w-auto">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-md w-20 h-20 sm:w-24 sm:h-24 object-cover"
                  />
                  <div className="flex-1">
                    <p>{item.name}</p>
                    <br />
                    <p className="text-sm">
                      1 <span className="px-2">x</span>{" "}
                      <span className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.name)}
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


// "use client";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import { useAppSelector } from "../../lib/store/hooks";
// import { useAppDispatch } from "../../lib/store/hooks";
// import { remove } from "../../lib/store/features/cart/cart";

// const Shopping_Cart = () => {
//   const cartItems = useAppSelector((state) => state.cart.items); 
//   const dispatch = useAppDispatch();

//   const removeItem = (id) => {
//     dispatch(remove(id)); 
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price ,
//     0
//   );
//   return (
//     <Sheet>
//       <SheetTrigger>
//         <button >
//             <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M24.2356 16.1926H7.95237L8.76995 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2895 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8765 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.3771 2.07308 24.2383 2.07227L6.95706 2.01484L6.8094 1.32031C6.71643 0.877344 6.31721 0.554688 5.86331 0.554688H1.6387C1.3827 0.554688 1.13719 0.656381 0.956172 0.837398C0.775156 1.01841 0.673462 1.26393 0.673462 1.51992C0.673462 1.77592 0.775156 2.02143 0.956172 2.20245C1.13719 2.38346 1.3827 2.48516 1.6387 2.48516H5.08127L5.72659 5.55312L7.31526 13.2449L5.26995 16.5836C5.16373 16.727 5.09975 16.8972 5.08526 17.075C5.07076 17.2528 5.10632 17.4312 5.18791 17.5898C5.35198 17.9152 5.68284 18.1203 6.04924 18.1203H7.76643C7.40035 18.6065 7.20261 19.1988 7.20315 19.8074C7.20315 21.3551 8.46096 22.6129 10.0086 22.6129C11.5563 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.0921 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.8981 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1403 18.1203H24.2383C24.7688 18.1203 25.2035 17.6883 25.2035 17.1551C25.202 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2356 16.1926ZM7.35901 3.91797L23.1035 3.96992L21.5613 12.6051L9.19377 12.627L7.35901 3.91797ZM10.0086 20.6715C9.53284 20.6715 9.14456 20.2832 9.14456 19.8074C9.14456 19.3316 9.53284 18.9434 10.0086 18.9434C10.4844 18.9434 10.8727 19.3316 10.8727 19.8074C10.8727 20.0366 10.7816 20.2564 10.6196 20.4184C10.4576 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.8981 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.8981 18.9434C19.3739 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.5091 20.4184C19.347 20.5805 19.1272 20.6715 18.8981 20.6715Z" fill="black"/>
// </svg>
// <span className="absolute top-7 right-10 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">
//        {cartItems.length}
//     </span>
//             </button>
//       </SheetTrigger>
//       <SheetContent className="font-custom w-full sm:w-[540px] lg:w-[600px]">
//         <SheetHeader>
//           <SheetTitle className="text-2xl font-bold m-2">Shopping Cart</SheetTitle>
//         </SheetHeader>
//         <div className="border-b-2 mt-4"></div>
//         <div className="mt-4 space-y-4  max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between pb-4 gap-4 flex-wrap"
//               >
//                 <div className="flex items-center gap-4 py-5 w-full sm:w-auto">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="rounded-md w-20 h-20 sm:w-24 sm:h-24"
//                   />
//                   <div className="flex-1">
//                     <p>{item.name}</p>
//                     <br />
//                     <p className="text-sm">
//                       1 <span className="px-2">x</span>{" "}
//                       <span className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</span>
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeItem(item.name)}
//                   className="text-gray-500 hover:text-red-500 mt-2 sm:mt-0"
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
//                       fill="#9F9F9F"
//                     />
//                   </svg>
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

//         <div className="mt-6 flex flex-col sm:flex-row gap-5">
//           <Link href="/cart">
//             <button className="border border-black rounded-3xl px-10 py-2 w-full sm:w-auto">
//               Cart
//             </button>
//           </Link>
//           <Link href="/checkout">
//             <button className="border border-black rounded-3xl px-6 py-2 w-full sm:w-auto">
//               Checkout
//             </button>
//           </Link>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default Shopping_Cart;