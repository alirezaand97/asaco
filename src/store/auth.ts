import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "models/user.model";

export const initialState: UserInterface = { token: "", isLogedIn: false };
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInterface>) => {
      return action.payload;
    },
  },
});

export default auth;
export const { setCredentials } = auth.actions;

