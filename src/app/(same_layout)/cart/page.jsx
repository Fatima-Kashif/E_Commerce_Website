"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import { useAppSelector } from "../../../lib/store/hooks";
import { useAppDispatch } from "../../../lib/store/hooks";
import { remove } from "../../../lib/store/features/cart/cart";

function Cart() {
    const cartItems = useAppSelector((state) => state.cart.items); 
    const dispatch = useAppDispatch();
    const [storedCart, setStoredCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setStoredCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
            setStoredCart(cartItems);
        }
    }, [cartItems]);

    const handleRemoveFromCart = (productId) => {
        dispatch(remove(productId)); 
        const updatedCart = storedCart.filter(item => item.name !== productId);
        setStoredCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };


    return (
        <div className="font-custom">
            <p className="font-semibold text-4xl ml-20 mt-20">Cart</p>
            <div className="flex gap-2 ml-20 items-center mt-1">
                <p className="font-semibold">Home</p>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black"/>
                </svg>
                <p>Cart</p>
            </div>

            <div className="flex gap-20 mb-60">
                <div>
                    <div className="ml-20 mt-20 w-[95%] bg-[#F9F1E7] p-4 flex gap-4 justify-evenly font-semibold">
                        <p className="ml-6">Product</p>
                        <p className="mr-4">Price</p>
                        <p className="ml-4">Quantity</p>
                        <p className="mr-6">Subtotal</p>
                    </div>

                    <div className="min-w-[800px]">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex items-center mt-10 gap-2 w-[100%]">
                                <img src={item.img} alt="cart_img" className="rounded ml-20 w-20 h-20" />
                                <p className="text-[#9F9F9F]">{item.name}</p>
                                <p className="text-[#9F9F9F] ml-6">Rs. {item.price}</p>
                                <div className="h-8 w-8 rounded border-2 text-center ml-14">1</div>
                                <p className="ml-[70px]">Rs. {item.price }</p>
                                <button onClick={() => handleRemoveFromCart(item.name)} className="pl-10">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#B88E2F"/>
                                    </svg>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
                    )}
                    </div>
                </div>

                <div className="bg-[#F9F1E7] w-[30%] h-[50%] p-5 mt-20">
                    <p className="text-2xl text-center font-bold">Cart Totals</p>
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <p className="mt-20">Subtotal <span className="text-[#9F9F9F] ml-10">Rs. {storedCart.reduce((acc, item) => acc + item.price, 0)}</span></p>
                        <p>Total <span className="text-[#B88E2F] text-lg ml-14">Rs. {storedCart.reduce((acc, item) => acc + item.price , 0)}</span></p>
                        <Link href="/checkout">
                            <button className="border-2 border-black px-14 py-3 mb-20 rounded-lg">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
