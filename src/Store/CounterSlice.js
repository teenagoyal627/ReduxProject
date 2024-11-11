import { createSlice } from "@reduxjs/toolkit";

const InitialCounterStateValue = { counterValue: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counterValue",
  initialState: InitialCounterStateValue,
  reducers: {
    increment(state) {
      state.counterValue++;
    },
    decrement(state) {
      state.counterValue--;
    },
    increase(state, action) {
      state.counterValue = state.counterValue+action.payload;
    },
    toggleCounter(state) {
      state.counterValue = !state.showCounter;
    },
  },
});
export const counterAction=counterSlice.actions;

export default counterSlice

