import { createSlice } from "@reduxjs/toolkit";


const loadCartFromStorage = () => {
    if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromStorage(),
    },
    reducers: {
        add(state, action) {
            state.items.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items)); 
        },
        remove(state, action) {
            state.items = state.items.filter(item => item.name !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items)); 
        },
       
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
