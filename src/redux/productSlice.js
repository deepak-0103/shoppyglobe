import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    searchTerm: ""
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setSearch } = productSlice.actions;
export default productSlice.reducer;