"use client";
import { useAppDispatch} from "../../lib/store/hooks";
import {add} from "../../lib/store/features/cart/cart";
function Products(props) {
  const dispatch=useAppDispatch();
  // const cartItems = useAppSelector((state) => state.cart.items); // Access Redux cart state

  // console.log("Current Cart Items:", cartItems);
  const handleAddToCart=(product) => {
    console.log('adding to cart',product);
    dispatch(add(product));
  };
    return (
      <div className="relative group">
      
        <div className="relative overflow-hidden rounded">
          <img src={props.img} alt="product" className="rounded w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-[#B88E2F] font-semibold py-3 px-10  shadow hover:bg-gray-100" onClick={()=>handleAddToCart( { 
    name: props.productname, 
    price: props.price, 
    img: props.img})}>
              Add to cart
            </button>
            <div className="flex gap-4 mt-9 text-white">
              <button className="flex items-center gap-2 hover:text-gray-300">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white"/>
</svg>
 Share
              </button>
              <button className="flex items-center gap-1 hover:text-gray-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99973 14.0361C-5.33333 6.66667 3.99999 -1.33333 7.99973 3.72537C12 -1.33334 21.3333 6.66667 7.99973 14.0361Z" stroke="white" strokeWidth="1.8"/>
</svg>
 Like
              </button>
            </div>
          </div>
        
        <div className="p-4 font-custom text-left border bg-[#F4F5F7] flex flex-col gap-2">
          <p className="font-semibold">{props.productname}</p>
          <p className="text-sm text-gray-500">{props.desc}</p>
          <p className="font-semibold">Rp {props.price}</p>
        </div>
      </div>
      </div>

    );
  }
  
  export default Products;
  