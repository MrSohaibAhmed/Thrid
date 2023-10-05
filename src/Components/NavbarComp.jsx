/* eslint-disable no-unused-vars */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import whiteLogo from "./white-logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarComp from "./SideBarComp";
import { useState } from "react";
function NavbarComp() {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <>
      {/* {isSideBar && <SideBarComp setState={setIsSideBar} />}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            backgroundColor: "#3f3a42",
            top: "0%",
            position: isSideBar ? "static" : "",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <div
                onClick={() => {
                  setIsSideBar(true);
                }}
              >
                <MenuIcon />
              </div>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <img src={whiteLogo} className="w-[120px] p-2" alt="image" />
          </Toolbar>
        </AppBar>
      </Box> */}
      <nav className="sticky">
        <div className="navbar">
          <div className="container-fluid nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <img src={whiteLogo} height="60" width="60" />
            </div>
            <div className="menu-items">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>OUR Offerings</li>
              <li>WORK</li>
              <li>VIDEO</li>
              <li>CONTACT</li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
