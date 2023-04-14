import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookArray: [],
};

export const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookArray.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      bookArray: state.bookArray.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
