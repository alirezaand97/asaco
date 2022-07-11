import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  drawer: { show: boolean };
}

const initialState: ModalInterface = { drawer: { show: false } };

const modals = createSlice({
  initialState,
  name: "modals",
  reducers: {
    toggleDrawer: (state) => {
      return { ...state, drawer: { show: !state.drawer.show } };
    },
  },
});

export default modals;

export const { toggleDrawer } = modals.actions;
