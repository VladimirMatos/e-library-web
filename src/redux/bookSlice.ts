import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Book = {
  id: string;
  title: string;
  description: string;
  categoryId: number;
  imageUrl: string;
  imageBase64: string;
  bookPage?: [
    {
      id: number;
      page: number;
      text: string;
    }
  ];
  category?: {
    id: number;
    name: string;
  };
};

const initialState: Book = {
  id: "",
  title: "",
  description: "",
  categoryId: 0,
  imageUrl: "",
  imageBase64: "",
  bookPage: [
    {
      id: 0,
      page: 0,
      text: "",
    },
  ],
  category: {
    id: 0,
    name: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const {
        title,
        description,
        categoryId,
        imageUrl,
        imageBase64,
        bookPage,
        category,
        id,
      } = action.payload;
      state.title = title;
      state.description = description;
      state.categoryId = categoryId;
      state.imageUrl = imageUrl;
      state.imageBase64 = imageBase64;
      state.bookPage = bookPage;
      state.category = category;
      state.id = id;
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
