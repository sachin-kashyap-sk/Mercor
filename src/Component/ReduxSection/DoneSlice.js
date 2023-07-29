import { createSlice, nanoid } from "@reduxjs/toolkit";
import comment from "../../Assets/comment.png";
import folder from "../../Assets/folder.png";
import avatar11 from "../../Assets/avatar11.png";
import avatar22 from "../../Assets/avatar22.png";
import avatar33 from "../../Assets/avatar33.png";
import donePic from "../../Assets/donePic.png";
const initialState = {
  Done: [
    {
      id: nanoid(),
      title: "Completed",
      color: "pink",
      text: "...",
      header: "Mobile App Design",
      pic: donePic,
      avatar1: avatar11,
      avatar2: avatar22,
      avatar3: avatar33,
      comment: comment,
      commentText: "12 comment",
      folder: folder,
      folderText: "15 files",
    },
    {
      id: nanoid(),
      title: "Completed",
      color: "success",
      text: "...",
      header: "Design System",
      mainText: "It just needs to adapt the UI from what you did before ",
      avatar3: avatar33,
      comment: comment,
      commentText: "12 comment",
      folder: folder,
      folderText: "15 files",
    },
  ],
};

const DoneSlice = createSlice({
  name: "Done",
  initialState,
});

export const selectedDone = (state) => state.Done.Done;
export default DoneSlice.reducer;
