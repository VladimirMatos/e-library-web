import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Auth = {
  email: string;
  id: number;
  firstName: string;
  lastName: string;
};

const initialState: Auth = {
  email: "",
  id: 0,
  firstName: "",
  lastName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action: PayloadAction<Auth>) => {
      const { email, id, firstName, lastName } = action.payload;
      state.email = email;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { addAuth } = authSlice.actions;
export default authSlice.reducer;
