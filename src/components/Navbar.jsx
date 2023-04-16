import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

import "../index.css";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { useState } from "react";

const Navbar = () =>{
  const [handleClick,setHandleClick]=useState(false);
  return(
  <Stack
    zIndex={1000}
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#0f0f0f",
      top: 0,
      justifyContent: "space-between",
      color: "white",
    }}
  >
    <Box style={{ display: "flex", alignItems: "center" }} gap={3}>
      <img src={!handleClick ? "https://static.thenounproject.com/png/4676033-200.png" :'https://cdn-icons-png.flaticon.com/512/6714/6714978.png'} alt='light_mode' className="menu_icon_hover" height={45} sx={{display:{sm:"block",xs:"none"}}} onClick={()=>setHandleClick(!handleClick)} />
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
    </Box>
    <Box>
      <SearchBar />
    </Box>
    <Box className="header_icons" gap={1}>
      <VideoCallIcon className="header_icon" sx={{display:{sm:"block",xs:"none"}}} />
      <AppsIcon className="header_icon" sx={{display:{sm:"block",xs:"none"}}} />
      <NotificationsIcon className="header_icon" sx={{display:{sm:"block",xs:"none"}}} />
      <Avatar alt="user" src="https://www.svgrepo.com/show/144182/man.svg" />
    </Box>
  </Stack>
)};

export default Navbar;
