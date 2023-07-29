import React from "react";
import Box from "@mui/material/Box";
import edit from "../../../Assets/edit.png";
import share from "../../../Assets/share.png";
import classes from "../../../StylesContainer/RightSection/TopSection.module.css";
import addPeople from "../../../Assets/addPeople.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatar1 from "../../../Assets/avatar1.png";
import avatar2 from "../../../Assets/avatar2.png";
import avatar3 from "../../../Assets/avatar3.png";
import avatar4 from "../../../Assets/avatar4.png";
import { Button } from "@mui/material";
import line from "../../../Assets/line.png";
import blueBtn from "../../../Assets/blueBtn.png";
import more from "../../../Assets/more.png";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";

const TopSection = () => {
  return (
    <Box>
      <Box className={classes.topContainer}>
        <Box className={classes.innerFirst}>
          <p className={classes.mobileText}>Mobile App</p>
          <Box className={classes.imageContainer}>
            <img width="30px" height="30px" src={edit} alt="edit" />
            <img width="30px" height="30px" src={share} alt="share" />
          </Box>
        </Box>

        <Box className={classes.innerSec}>
          <img width="18px" height="18px" src={addPeople} alt="addPeople" />
          <p className={classes.invite}>Invite</p>
          <Box>
            <AvatarGroup max={5}>
              <Avatar width="30px" height="30px" alt="avatar1" src={avatar1} />
              <Avatar width="30px" height="30px" alt="avatar2" src={avatar2} />
              <Avatar width="30px" height="30px" alt="avatar3" src={avatar3} />
              <Avatar width="30px" height="30px" alt="avatar4" src={avatar4} />
              <Avatar width="30px" height="30px" alt="avatar4" src={avatar4} />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Box>
        </Box>
      </Box>

      <Box className={classes.btnMain}>
        <Box className={classes.firstButtonContainer}>
          <Button
            style={{ color: "#787486" }}
            startIcon={<FilterAltOutlinedIcon />}
            endIcon={<ArrowDropDownOutlinedIcon />}
            size="medium"
            variant="outlined"
          >
            Filter
          </Button>

          <Button
            style={{ color: "#787486" }}
            startIcon={<PermContactCalendarOutlinedIcon />}
            endIcon={<ArrowDropDownOutlinedIcon />}
            size="medium"
            variant="outlined"
          >
            Today
          </Button>
        </Box>

        <Box className={classes.secButtonContainer}>
          <Button
            style={{ color: "#787486" }}
            size="medium"
            variant="outlined"
            startIcon={<PeopleOutlinedIcon />}
          >
            Share
          </Button>

          <img src={line} alt="line" />
          <img width="40px" height="40px" src={blueBtn} alt="blueBtn" />
          <img width="21px" height="21px" src={more} alt="more" />
        </Box>
      </Box>
    </Box>
  );
};

export default TopSection;
