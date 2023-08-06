import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import AuthSlice from "./AuthSlice";



const store = configureStore({
  reducer: { counter: counterSlice, auth: AuthSlice},
});



export default store;
