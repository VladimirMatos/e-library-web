import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Book = {
  title: string;
  description: string;
  category: number;
  imageUrl: string;
  imageBase64: string;
};

const initialState: Book = {
  title: "",
  description: "",
  category: 0,
  imageUrl: "",
  imageBase64: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const { title, description, category, imageUrl, imageBase64 } =
        action.payload;
      state.title = title;
      state.description = description;
      state.category = category;
      state.imageUrl = imageUrl;
      state.imageBase64 = imageBase64;
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
