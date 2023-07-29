import { createSlice, nanoid } from "@reduxjs/toolkit";
import comment from "../../Assets/comment.png";
import folder from "../../Assets/folder.png";
import avatar11 from "../../Assets/avatar11.png";
import avatar22 from "../../Assets/avatar22.png";
import avatar33 from "../../Assets/avatar33.png";
import pic from "../../Assets/pic.png";
import tree from "../../Assets/tree.png";
import sofa from "../../Assets/sofa.png";
const initialState = {
  progress: [
    {
      id: nanoid(),
      title: "Low",
      text: "...",
      header: "Onboarding Illustrations",
      pic: pic,

      avatar1: avatar11,
      avatar2: avatar22,
      avatar3: avatar33,
      comment: comment,
      commentText: "14 comment",
      folder: folder,
      folderText: "15 files",
    },
    {
      id: nanoid(),
      title: "Low",
      text: "...",
      header: "Moodboard",
      pic: tree,
      pic1: sofa,
      avatar3: avatar33,
      comment: comment,
      commentText: "9 comment",
      folder: folder,
      folderText: "10 files",
    },
  ],
};

const InProgressSlice = createSlice({
  name: "Progress",
  initialState,
});

export const selectedProgress = (state) => state.Progress.progress;
export default InProgressSlice.reducer;
