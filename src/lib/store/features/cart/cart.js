import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,action)=>{
        state.items.push(action.payload);

    },
    
    remove: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {add,remove} = cartSlice.actions

export default cartSlice.reducer
