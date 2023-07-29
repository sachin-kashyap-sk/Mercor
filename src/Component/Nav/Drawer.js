import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import classes from "../../StylesContainer/Drawer/DrawerContainer.module.css";
import leftIcon from "../../Assets/leftIcon.png";
import icon from "../../Assets/icon.png";
import searchIcon from "../../Assets/searchIcon.png";
import calendarIcon from "../../Assets/calendarIcon.png";
import messageIcon from "../../Assets/messageIcon.png";
import notificationIcon from "../../Assets/notificationIcon.png";
import userIcon from "../../Assets/userIcon.png";
import arrowIcon from "../../Assets/arrowIcon.png";
import home from "../../Assets/Home.png";
import message from "../../Assets/message.png";
import tasks from "../../Assets/task.png";
import member from "../../Assets/member.png";
import setting from "../../Assets/setting.png";
import add from "../../Assets/add.png";
import dot1 from "../../Assets/dot1.png";
import dot2 from "../../Assets/dot2.png";
import dot3 from "../../Assets/dot3.png";
import dot4 from "../../Assets/dot4.png";
import lamp from "../../Assets/lamp.png";
import RightSection from "../RightSection";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const data = [
    {
      id: 1,
      title: "Home",
      icon: home,
    },
    {
      id: 2,
      title: "Message",
      icon: message,
    },
    {
      id: 3,
      title: "Tasks",
      icon: tasks,
    },
    {
      id: 4,
      title: "Members",
      icon: member,
    },
    {
      id: 5,
      title: "Settings",
      icon: setting,
    },
  ];

  const MyProjectData = [
    {
      id: 1,
      icon: dot1,
      title: "Mobile App",
      subText: "...",
    },
    {
      id: 2,
      icon: dot2,
      title: "Website Redesign",
    },
    {
      id: 3,
      icon: dot3,
      title: "Design System",
    },
    {
      id: 4,
      icon: dot4,
      title: "Wireframes",
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #DBDBDB",
          boxShadow: "none",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.firstContainer}>
            <Box className={classes.inputContainer}>
              <TextField
                className={classes.input}
                placeholder="Search for anything..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        width="20px"
                        height="20px"
                        src={searchIcon}
                        alt="searchIcon"
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box className={classes.secContainer}>
              <Box className={classes.imageMain}>
                <img
                  width="22px"
                  height="22px"
                  src={calendarIcon}
                  alt="calendarIcon"
                />
                <img
                  width="22px"
                  height="22px"
                  src={messageIcon}
                  alt="messageIcon"
                />
                <img
                  width="22px"
                  height="22px"
                  src={notificationIcon}
                  alt="notificationIcon"
                />
              </Box>
            </Box>
            <Box className={classes.thirdContainer}>
              <Box className={classes.textContainer}>
                <p
                  style={{
                    fontWeight: "400px",
                    fontSize: "16px",
                    color: "#0D062D",
                  }}
                >
                  Anima Agrawal
                </p>
                <p
                  style={{
                    fontWeight: "400px",
                    fontSize: "14px",
                    color: "#787486",
                  }}
                >
                  U.P, India
                </p>
              </Box>
              <Box className={classes.forthContainer}>
                <img width="38px" height="38px" src={userIcon} alt="userIcon" />
                <img
                  width="18px"
                  height="18px"
                  src={arrowIcon}
                  alt="arrowIcon"
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <img width="24px" height="24px" src={icon} alt="icon" />
            <p className={classes.title}>Project M.</p>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <img width="26px" height="20px" src={leftIcon} alt="leftIcon" />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {data.map((item) => (
            <ListItem disablePadding key={item.id}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={item.icon} alt="icon" />
                </ListItemIcon>
                <p className={classes.title}>{item.title}</p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box className={classes.myProject}>
          <p className={classes.text}>My Projects</p>
          <img width="16px" height="16px" src={add} alt="add" />
        </Box>
        <List>
          {MyProjectData.map((item) => (
            <ListItem disablePadding key={item.id}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={item.icon} alt="icon" />
                </ListItemIcon>
                <Box className={classes.mobileApp}>
                  <p className={classes.title}>{item.title}</p>
                  <p className={classes.subText}>{item.subText}</p>
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box className={classes.bottomMain}>
          <Box className={classes.bottomContainer}>
            <Box className={classes.innerBottom}>
              <img width="24px" height="24px" src={lamp} alt="lamp" />
            </Box>
            <p className={classes.firstText}>Thoughts Time</p>
            <p className={classes.secText}>
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "2%",
                paddingLeft: "4%",
                paddingRight: "4%",
                borderRadius: "10px",
              }}
            >
              <p className={classes.firstText}>Write a message</p>
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <RightSection />
      </Main>
    </Box>
  );
}
