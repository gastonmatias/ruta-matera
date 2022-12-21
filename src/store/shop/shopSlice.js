import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
   name: 'shop',
   initialState: {
      products:   [],
      categories: []
   },
   reducers:{
       setProducts:( state, action ) => {
           state.products = action.payload
       },
       setCategories:( state, action ) => {
           state.categories = action.payload
       },
   }
});

// Action creators are generated for each case reducer function
export const { setProducts, setCategories } = shopSlice.actions;