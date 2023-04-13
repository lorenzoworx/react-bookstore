import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryArray: [],
};

export const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categoryArray.length === 0) {
        state.categories.push('Under Construction');
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
