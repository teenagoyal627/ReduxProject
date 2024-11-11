// import { Component } from "react"
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import authSlice from "./AuthSlice";


// this code is for using the redux.....
// const createReducer = (state = stateValue, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "showToggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store=createStore(counterSlice.reducer)
// const store = createStore({ counter: counterSlice.reducer });

const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer

    }
})
const latestStore = store.getState();
console.log(latestStore);

export default store;
