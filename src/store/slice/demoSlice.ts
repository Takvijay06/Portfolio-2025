import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
  name: "demo",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = demoSlice.actions;
export default demoSlice.reducer;
