import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItem = createAsyncThunk("item", async () => {
  // const res = await fetch("https://dummyjson.com/products?limit=10");
  const res = await fetch("https://fakestoreapi.com/products/");
  const res2 = await res.json();
  console.log(res2);
  return res2;
});


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    entities: [],
    loading: "idle",
    
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 0 } = action.payload;
      const item = state.cart.find((product) => product.id == id);

      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload });
      }
      state.totalQuantity += quantity;
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
    min: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((product) => product.id == id);
      item.quantity -= 1;
      state.totalQuantity -= 1;
    },
    add: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((product) => product.id == id);
      item.quantity += 1;
      state.totalQuantity += 1;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
      console.log(action.payload)
      console.log("fulfilled");
    });
    builder.addCase(fetchItem.pending, (state, action) => {
      
      console.log("pending");
    });
    builder.addCase(fetchItem.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default cartSlice.reducer;
export const { addToCart, remove, min, add } = cartSlice.actions;
