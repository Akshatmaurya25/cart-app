import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    
  },
  reducers: {
    addToCart: (state, action) => {
      // state.quantity += 1;
      // state.cart.push(action.payload)

      //         const item = state.cart.find((product) => product.id === action.payload.id);

      //   if (item) {
      //     item.quantity += action.payload.quantity;
      //   } else {
      //     state.cart.push(action.payload); 
      //   }
      // let quantity = 1;
      const { id, quantity } = action.payload;
      const item = state.cart.find((product) => product.id == id);

      if(item){
        item.quantity += quantity;
      } 
      else {
        state.cart.push({ ...action.payload });
      }
      state.quantity += quantity;
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, remove } = cartSlice.actions;
