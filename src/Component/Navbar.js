import {
  AppBar,
  Grid,
  MenuItem,
  MenuList,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  nav: {
    color: "#242120",
    backgroundColor: "#fff",
    boxShadow: "none",
    outline: "#696969",
  },
  navContainer: {},
  navMobile: {
    position: "relative",
    outline: "#696969",
  },
  logo: {
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      flex: "1",
      marginLeft: "5px",
    },
  },

  gridContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "90%",
    height: "80px",
    outline: "#696969",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      display: "none",
      outline: "#696969",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
      width: "100px",
    },
  },

  gridMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "3rem",
    left: "0rem",
    width: "100vw",
    height: "70vh",
    color: "#000",
    background: "#fff",
    transition: "all 0.5s ease",
    paddingTop: "2rem",
  },

  menuButtonMobile2: {
    display: "grid",
    // flexDirection: "column",
    // // width: "100%",
    // height: "90vh",
    // position: "absolute",
    // // top: "10px",
    // // left: "-100px",
    // opacity: "1",
    // transition: "all 0.5s ease",
  },
  menuList: {
    display: "flex",
    marginLeft: "20rem",
    marginTop: "-10px",
    flex: "1",
    // fontSize: "16px",
    outline: "none",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flex: "none",
      width: "100%",
      marginLeft: "0rem",
      alignItems: "center",
    },
  },
  menuList2: {
    display: "flex",
    marginTop: "-10px",
    outline: "none",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "90%",
      alignItems: "center",
      fontSize: "4rem",
    },
  },
  button: {
    backgroundColor: "#FF5C00",
    color: "#fff",
    padding: "15px",
    borderRadius: "4px",
    margin: "20px",
    "&:hover": {
      backgroundColor: "#FF0C00",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      // display: "block",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <AppBar position="absolute" color="transparent" className={classes.nav}>
      <Grid container xs={12}>
        <Grid item xs={0} sm={1} />
        <Grid item container xs={12} sm={10} style={{ display: "flex" }}>
          <NavLink to="/" className={classes.logo}>
            <img src={logo} alt="Vasiti logo" style={{ width: "100px" }} />
          </NavLink>
          <Grid className={isOpen ? classes.gridMobile : classes.gridContainer}>
            <MenuList
              // className={isOpen ? classes.menuButtonMobile : classes.menuList}
              className={classes.menuList}
            >
              <MenuItem component={Link} to="/" onClick={closeMobileMenu}>
                ABOUT US
              </MenuItem>
              <MenuItem component={Link} to="/signup" onClick={closeMobileMenu}>
                STORIES
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={closeMobileMenu}>
                CONTACT
              </MenuItem>
            </MenuList>
            <MenuList
              // className={isOpen ? classes.menuButtonMobile2 : classes.menuList2}
              className={classes.menuList2}
            >
              <MenuItem component={Link} to="/login" onClick={closeMobileMenu}>
                LOG IN
              </MenuItem>
              <MenuItem
                component={Link}
                to="/signup"
                className={classes.button}
                onClick={closeMobileMenu}
              >
                SIGN UP
              </MenuItem>
            </MenuList>
          </Grid>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            {isOpen ? (
              <CloseIcon style={{ fontSize: "30px" }} />
            ) : (
              <MenuIcon style={{ fontSize: "30px" }} />
            )}
          </IconButton>
          

          {/* <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            {isOpen ? (
              <CloseIcon style={{ fontSize: "50px" }} />
            ) : (
              <MenuIcon style={{ fontSize: "50px" }} />
            )}
          </IconButton> */}
          {/* </Grid> */}
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </AppBar>
  );
};

export default Navbar;