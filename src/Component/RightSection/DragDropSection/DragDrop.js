import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import comment from "../../../Assets/comment.png";
import folder from "../../../Assets/folder.png";
import classes from "../../../StylesContainer/RightSection/DragDrop/DragDrop.module.css";
import { selectedData, selectedHeader } from "../../ReduxSection/TodoSlice";
import { selectedProgress } from "../../ReduxSection/InProgressSlice";
import { selectedDone } from "../../ReduxSection/DoneSlice";
import { useSelector } from "react-redux";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
const DragDrop = () => {
  const Headers = useSelector(selectedHeader);
  const itemsFromBackend = useSelector(selectedData);
  const itemFromProgress = useSelector(selectedProgress);
  const itemFromDone = useSelector(selectedDone);
  const columnsFromBackend = {
    [nanoid()]: {
      items: itemsFromBackend,
    },
    [nanoid()]: {
      items: itemFromProgress,
    },
    [nanoid()]: {
      items: itemFromDone,
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className={classes.masterContainer}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column], index) => {
          return (
            <Box className={classes.container} key={id}>
              <Box
                className={classes.mainContainer}
                style={{
                  borderBottom: `3px solid ${Headers[index].borderColor}`,
                }}
              >
                <Box
                  style={{
                    width: `${Headers[index].width}`,
                    alignItems: "center",
                  }}
                  className={classes.firstContainer}
                >
                  <img
                    width="8px"
                    height="8px"
                    src={Headers[index].dot}
                    alt="dot5"
                  />
                  <p className={classes.todoText}>{Headers[index].title}</p>
                  <Box className={classes.innerFirst}>
                    <p>{Headers[index].count}</p>
                  </Box>
                </Box>
                <Box>
                  <img src={Headers[index].btn} alt="" />
                </Box>
              </Box>
              <Box>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <Box
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id.toString()}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Box sx={{ marginTop: "4%" }}>
                                      <Box className={classes.dragFirst}>
                                        <Box className={classes.firstTodo}>
                                          <Box
                                            className={classes.titleContainer}
                                          >
                                            <p
                                              style={{
                                                fontSize: "12px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {item.title}
                                            </p>
                                          </Box>

                                          <p className={classes.text}>
                                            {item.text}
                                          </p>
                                        </Box>
                                        <Box>
                                          <p className={classes.headerText}>
                                            {item.header}
                                          </p>
                                        </Box>
                                        <Box>
                                          <p className={classes.mainText}>
                                            {item.mainText}
                                          </p>
                                        </Box>

                                        <Box
                                          sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <img src={item.pic} alt="" />
                                          <img src={item.pic1} alt="" />
                                        </Box>

                                        <Box className={classes.avatarHeader}>
                                          <AvatarGroup
                                            width="10px"
                                            height="10px"
                                            max={3}
                                          >
                                            <Avatar
                                              sx={{
                                                width: 24,
                                                height: 24,
                                              }}
                                              alt="avatar1"
                                              src={item.avatar1}
                                            />
                                            <Avatar
                                              sx={{
                                                width: 24,
                                                height: 24,
                                              }}
                                              alt="avatar2"
                                              src={item.avatar2}
                                            />
                                            <AvatarGroup
                                              sx={{
                                                width: 24,
                                                height: 24,
                                              }}
                                              alt="avatar3"
                                              src={item.avatar3}
                                            />
                                          </AvatarGroup>
                                          <Box
                                            sx={{
                                              display: "flex",
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              width: "50%",
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                width="16px"
                                                height="16px"
                                                src={comment}
                                                alt="comment"
                                              />
                                              <p
                                                className={classes.commentText}
                                              >
                                                {item.commentText}
                                              </p>
                                            </Box>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img src={folder} alt="folder" />
                                              <p className={classes.folderText}>
                                                {item.folderText}
                                              </p>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </Box>
                    );
                  }}
                </Droppable>
              </Box>
            </Box>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
