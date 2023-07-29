import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../ReduxSection/TodoSlice";
import Progress from "../ReduxSection/InProgressSlice";
import Done from "../ReduxSection/DoneSlice";
export const Store = configureStore({
  reducer: {
    TodoSlice: TodoSlice,
    Progress: Progress,
    Done: Done,
  },
});
