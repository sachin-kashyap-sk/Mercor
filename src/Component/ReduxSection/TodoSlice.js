import { createSlice, nanoid } from "@reduxjs/toolkit";
import avatar11 from "../../Assets/avatar11.png";
import avatar22 from "../../Assets/avatar22.png";
import avatar33 from "../../Assets/avatar33.png";
import comment from "../../Assets/comment.png";
import folder from "../../Assets/folder.png";
import dot2 from "../../Assets/dot2.png";
import dot5 from "../../Assets/dot5.png";
import dot4 from "../../Assets/dot4.png";
import add from "../../Assets/addPeople.png";

const initialState = {
  TodoData: [
    {
      id: nanoid(),
      title: "Low",
      text: "...",
      header: "Brainstorming",
      mainText:
        "Brainstorming brings team members' diverse experience into play.",
      avatar1: avatar11,
      avatar2: avatar22,
      avatar3: avatar33,
      comment: comment,
      commentText: "12 comment",
      folder: folder,
      folderText: "0 files",
    },
    {
      id: nanoid(),
      title: "High",
      text: "...",
      header: "Research",
      mainText:
        "User research helps you to create an optimal product for users",
      avatar1: avatar11,
      avatar2: avatar22,
      comment: comment,
      commentText: "10 comment",
      folder: folder,
      folderText: "3 files",
    },
    {
      id: nanoid(),
      title: "High",
      text: "...",
      header: "Wireframes",
      mainText:
        "Low fidelity wireframes include the most basic content and visuals.",
      avatar1: avatar11,
      avatar2: avatar22,
      avatar3: avatar33,
      comment: comment,
      commentText: "10 comment",
      folder: folder,
      folderText: "3 files",
    },
  ],

  headers: [
    {
      id: nanoid(),
      text: "...",
      dot: dot2,
      title: "To Do",
      count: 4,
      btn: add,
      borderColor: "#5030e5",
      width: "30%",
    },
    {
      id: nanoid(),
      dot: dot5,
      title: "On Progress",
      count: 5,
      borderColor: "#ffa500",
      width: "40%",
    },
    {
      id: nanoid(),
      dot: dot4,
      title: "Done",
      count: 4,
      borderColor: "#8bc48a",
      width: "30%",
    },
  ],
};

const TodoSlice = createSlice({
  initialState,
  name: "TodoSlice",
});

export const { removeData, addData } = TodoSlice.actions;
export const selectedHeader = (state) => state.TodoSlice.headers;
export const selectedData = (state) => state.TodoSlice.TodoData;
export default TodoSlice.reducer;
