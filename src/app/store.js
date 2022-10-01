import { configureStore } from "@reduxjs/toolkit";
import selectProfileSliceReducer from "../features/selectedProfile/selectProfileSlice";

export default configureStore({
  reducer: {
    setProfile: selectProfileSliceReducer,
  },
});
