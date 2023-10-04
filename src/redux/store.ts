import { configureStore } from "@reduxjs/toolkit";
import form from "./Slices/formSlice";

export default configureStore({
  reducer: { form },
});
