import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../feature/mailSlice";
import userReducer from "../feature/userSlice";

export const store = configureStore({
	reducer: {
		mail: mailReducer,
		user: userReducer,
	},
});
