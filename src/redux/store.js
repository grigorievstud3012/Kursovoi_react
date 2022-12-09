import { configureStore } from "@reduxjs/toolkit";
import XReducer from "./Slice";

export default configureStore ({
    reducer: {
        lang: XReducer,
    },
});