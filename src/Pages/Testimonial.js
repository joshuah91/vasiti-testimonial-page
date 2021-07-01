import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, Grid, Button, Typography, Input } from "@material-ui/core";
import Navbar from "../Component/Navbar";
import Testimonial1 from "../Images/Testimonial1.png";
import Ellipse from "../Images/Ellipse.png";
import ladiesSmile from "../Images/ladiesSmile.png";
import Vector from "../Images/Vector.png";
import joseph from "../Images/joseph.png";
import adetola from "../Images/adetola.png";
import fayemi from "../Images/fayemi.png";
import chisom from "../Images/chisom.png";
import adun from "../Images/adun.png";
import okeke from "../Images/okeke.png";
import josiah from "../Images/josiah.png";
import temi from "../Images/temi.png";
import promise from "../Images/promise.png";
import feyisola from "../Images/feyisola.png";
import karen from "../Images/karen.png";
import oluchi from "../Images/oluchi.png";
import amos from "../Images/amos.png";
import banner from "../Images/banner.png";
import cele from "../Images/cele.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  subNavBar: {
    marginTop: "5rem",
    border: "1px solid #D3D3D3",
    [theme.breakpoints.down("md")]: {
      border: "none",
    },
  },
  menuList: {
    display: "flex",
    marginLeft: "7rem",
    marginTop: "10px",
    flex: "1",
    outline: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginLeft: "0px",
    },
  },
  subFirstRow: {
    marginTop: "8rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
      marginLeft: theme.spacing(2),
    },
  },
  firstRowBody: {
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      fontWeight: "700",
      marginBottom: "30px",
    },
  },
  firstRowBody2: {
    fontweight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    color: "#494949",
    letterSpacing: "1px",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  firstRowImage: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
    },
  },
  testimonyHeader: {
    backgroundColor: "#222222",
    width: "100%",
    height: "636px",
    marginTop: "-4px",
    border: "1px solid #222222",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      width: "95%",
      alignItems: "center",
      height: "auto",
    },
  },
  testHeadImage: {
    marginLeft: "40px",
    marginTop: "30px",
    background: `url(${Ellipse})`,
    height: "90%",
    width: "90%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  testHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // width: "50%",
      marginLeft: "-30px",
    },
  },
  customerButton: {
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "4px",
    width: "100px",
    marginTop: "5px",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      width: "40%",
    },
  },
  testHeadBody1: {
      color: "#fff",
      marginTop: "6rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
      },
  },
  testHeadBody2: {
      fontweight: "400",
      fontStyle: "normal",
      fontSize: "18px",
      color: "#fff",
      letterSpacing: "1px",
      marginTop: "40px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
  },
  shareStory: {
    fontweight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    color: "#fff",
    letterSpacing: "1px",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      fontSize: "12px",
    },
  },
  testimonyHeade: {
    backgroundColor: "#FFF8F5",
    width: "100vw",
    height: "636px",
    marginTop: "-4px",
    border: "1px solid #FFF8F5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      marginTop: "10px",
      height: "auto",
      width: "95%",
    },
  },
  heade1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginLeft: "60px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  shareStory2: {
    fontweight: "400",
    fontStyle: "normal",
    fontSize: "18px",
    color: "#FF5C00",
    letterSpacing: "1px",
    marginTop: "70px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-30px",
      fontSize: "14px",
    },
  },
  testimonyArea: {
    backgroundColor: "#fff",
    width: "100vw",
    height: "636px",
    border: "1px solid #fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
      alignItems: "center",
      alignSelf: "auto",
      justifyContent: "space-around",
      marginLeft: "-30px",
    },
  },
  footer: {
    backgroundColor: "#25201D",
    width: "100vw",
    height: "379px",
    border: "1px solid #25201D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "109px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      height: "auto",
      alignItems: "center",
      marginTop: "0px",
      marginLeft: "-30px",
    },
  },
  footer2: {
    backgroundColor: "#25201D",
    width: "100vw",
    height: "379px",
    border: "1px solid #25201D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
      alignItems: "center",
      marginTop: "0px",
      marginLeft: "-30px",
    },
  },
  phoneBanner: {
    marginLeft: "80px", 
    marginTop: "-45px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      marginLeft: "-35px",
      width: "100%",
    },
  },
  celeIcon: {
    marginTop: "115px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  member: {
    color: "#fff",
    marginTop: "80px",
    lineHeight: "40px",
    size: "40px",
    fontStyle: "normal",
    fontWeight: "bold",
    LetterSpacing: "-0.03em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "start",
    // justifyItem: "space-around",
    padding: "5px",
    marginTop: "45px",
  },
  searchInput: {
    color: "#FFFFFF",
    lineHeight: "16.41px",
    background: "rgba(255, 255, 255, 0.2)",
    height: "52px",
    width: "60%",
    marginTop: "40px",
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    paddingLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "110%",
      marginLeft: "-40px",
    },
  },
  searchButton: {
    color: "#EF580 20%",
    boxShadow: "1px 4px 8px rgba(239, 88, 3, 0.2)",
    borderRadius: "4px",
    background: "#fff",
    font: "Roboto",
    fontSize: "14px",
    padding: "8px, 24px, 8px, 24px",
    marginTop: "-47px",
    width: "20%",
    height: "42px",
    fontWeight: "bold",
    marginLeft: "39%",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      fontSize: "12px",
      marginLeft: "140px",
      height: "50px",
      marginTop: "-52px",
    },
  },
}));


const Testimonial = () => {
  const classes = useStyles();

  return (
    <div>
      {/* navbar grid */}
      <Navbar />
      <Grid item xs={12} container className={classes.subNavBar}>
        <MenuList className={classes.menuList}>
          <MenuItem component={Link} to="/">
            MARKETPLACE
          </MenuItem>
          <MenuItem component={Link} to="/">
            WHOLESALE CENTER
          </MenuItem>
          <MenuItem component={Link} to="/">
            SELLER CENTER
          </MenuItem>
          <MenuItem component={Link} to="/">
            SERVICES
          </MenuItem>
          <MenuItem component={Link} to="/">
            INTERNSHIPS
          </MenuItem>
          <MenuItem component={Link} to="/">
            EVENTS
          </MenuItem>
        </MenuList>
      </Grid>
      <Grid item xs={11} container className={classes.firstRow}>
      <Grid item xs={6} className={classes.subFirstRow}>
        <Typography variant="h3" className={classes.firstRowBody}>
          Amazing
          Experiences from Our Wonderful Customers
        </Typography>
        <Typography variant="body1" className={classes.firstRowbody2}>
          Here is what customers and vendors are saying about us,
          you can share your stories with us too.
        </Typography>
      </Grid>
      <Grid item xs={5} sm={5} style={{ marginRight: "70px", marginTop: "1rem" }}>
        <img src={Testimonial1} alt="Testimonial Logo 1" className={classes.firstRowImage} />
      </Grid>
      </Grid>
      <Grid item xs={12} sm={12} container className={classes.testimonyHeader}>
        <Grid item xs={6} className={classes.testHeadImage}>
          <img src={ladiesSmile} alt="Ladies Smiling" style={{ width: "100%", height: "100%" }} />
        </Grid>
      <Grid item xs={5} container className={classes.testHeader}>
          <Typography variant="h4" className={classes.testHeadBody1}>
            Tolu & Joy's Experience
          </Typography>
          <Typography variant="button" className={classes.customerButton}>
            Customer
          </Typography>
          <Typography variant="body1" className={classes.testHeadBody2}>
          I had the best experience shopping with vasiti.
          Usability of the website was great, very good
          customer service, an all round great
          experience. I would definitely be coming back!
          I had the best experience shopping with vasiti.
          Usability of the website was great, very good
          customer service, an all round great
          experience. I would definitely be coming back! 
        </Typography>
        <Typography variant="body1" className={classes.shareStory}>
          SHARE YOUR OWN STORY!
        </Typography>
        <img src={Vector} alt="Vector" width="250" style={{marginTop: "-2px" }} />
        </Grid>
      </Grid>
      <Grid item xs={12} container className={classes.testimonyArea}>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}>
            <img src={joseph} alt="Joseph Ike" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Joseph Ike
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="body2"style={{
                font: "Inter",
                fontweight: "500",
                fontStyle: "normal",
                fontSize: "15px",
                color: "#535353",
                letterSpacing: "1px",
                lineHeight: "18.15px",
                marginTop: "5px",
              }}>
                In Ikeja
              </Typography>
              <Typography variant="button" style={{
              color: "#0D019A",
              border: "1px solid #EEF8FF",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "110px",
              background: "#EEF8FF",
              marginLeft: "15px",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Customer
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            // lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={adetola} alt="Adetola Fashina" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Adetola Fashina
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="body2"style={{
                font: "Inter",
                fontweight: "500",
                fontStyle: "normal",
                fontSize: "15px",
                color: "#535353",
                letterSpacing: "1px",
                lineHeight: "18.15px",
                marginTop: "5px",
              }}>
                Ibadan
              </Typography>
              <Typography variant="button" style={{
              color: "#0D019A",
              border: "1px solid #EEF8FF",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "110px",
              background: "#EEF8FF",
              marginLeft: "15px",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Customer
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={fayemi} alt="Emmanuel Fayemi" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Emmanuel Fayemi
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="body2"style={{
                font: "Inter",
                fontweight: "500",
                fontStyle: "normal",
                fontSize: "15px",
                color: "#535353",
                letterSpacing: "1px",
                lineHeight: "18.15px",
                marginTop: "5px",
              }}>
                In Akoka
              </Typography>
              <Typography variant="button" style={{
              color: "#0D019A",
              border: "1px solid #EEF8FF",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "110px",
              background: "#EEF8FF",
              marginLeft: "15px",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Customer
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
       </Grid>
       <Grid item xs={12} container className={classes.testimonyArea}>
        <Grid item xs={3} style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={chisom} alt="Chisom Obilor" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#535353",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Chisom Obilor
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="body2"style={{
                font: "Inter",
                fontweight: "500",
                fontStyle: "normal",
                fontSize: "15px",
                color: "#535353",
                letterSpacing: "1px",
                lineHeight: "18.15px",
                marginTop: "5px",
              }}>
                In Magodo
              </Typography>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE"
,             marginLeft: "15px",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={adun} alt="Adunoluwa Adeyemi" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Adunola Adeyemi
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="body2"style={{
                font: "Inter",
                fontweight: "500",
                fontStyle: "normal",
                fontSize: "15px",
                color: "#535353",
                letterSpacing: "1px",
                lineHeight: "18.15px",
                marginTop: "5px",
              }}>
                Iwo Road
              </Typography>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginLeft: "15px",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={okeke} alt="Chidi Okeke" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Chidi Okeke
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="body2"style={{
                font: "Inter",
                fontweight: "500",
                fontStyle: "normal",
                fontSize: "15px",
                color: "#535353",
                letterSpacing: "1px",
                lineHeight: "18.15px",
                marginTop: "5px",
              }}>
                In Somolu
              </Typography>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginLeft: "15px",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
       </Grid>
       <Grid item xs={12} container className={classes.testimonyHeade}>
        <Grid item xs={5} container className={classes.heade1}>
          <Typography variant="h4" style={{
            color: "#242120",
            marginTop: "6rem",
          }}>
            Josiah's Experience
          </Typography>
          <Typography variant="button" style={{
            color: "#FF5C00",
            marginTop: "10px",
            border: "1px solid #FF5C00",
            borderRadius: "4px",
            width: "100px",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}>
            Vendor
          </Typography>
          <Typography variant="body1"style={{
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "18px",
            color: "#242120",
            letterSpacing: "2px",
            marginTop: "30px",
        }}>
          I had the best experience shopping with vasiti.
          Usability of the website was great, very good
          customer service, an all round great
          experience. I would definitely be coming back!
          I had the best experience shopping with vasiti.
          Usability of the website was great, very good
          customer service, an all round great
          experience. I would definitely be coming back!
        </Typography>
        <Typography variant="body1" className={classes.shareStory2}>
          SHARE YOUR OWN STORY!
        </Typography>
        <img src={Vector} alt="Vector" width="225" style={{ marginTop: "-1px" }} />
        </Grid>
        <Grid item xs={6} style={{
          marginLeft: "30px",
          marginTop: "30px",
        }}>
          <img src={josiah} alt="Josiah's Shopping bag" style={{ width: "100%", height: "100%" }} />
        </Grid>
      </Grid>
      <Grid item xs={12} container className={classes.testimonyArea}>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={temi} alt="Temi Obadofin" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Temi Obadofin
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={promise} alt="Promise Ejiofor" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Promise Ejiofor
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={feyisola} alt="Feyisola Arinola" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Feyisola Arinola
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
       </Grid>
       <Grid item xs={12} container className={classes.testimonyArea}>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={karen} alt="Karen Ibeh" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Karen Ibeh
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={oluchi} alt="Oluchi Uzo" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Oluchi Uzo
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

        }}>
            <img src={amos} alt="Amos Okafor" style={{ width: "200px", height: "200px", background: `url(.png)` }} />
            <Typography variant="body1"style={{
              font: "Inter",
              fontweight: "600",
              fontStyle: "normal",
              fontSize: "24px",
              color: "#474747",
              letterSpacing: "1px",
              lineHeight: "29.05px",
              marginTop: "10px",
            }}>
              Amos Okafor
            </Typography>
            <Grid container style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}>
              <Typography variant="button" style={{
              color: "#049A01",
              border: "1px solid #F0FFEE",
              fontWeight: "600",
              borderRadius: "4px",
              lineHeight: "15.73px",
              letterSpacing: "2px",
              width: "83px",
              background: "#F0FFEE",
              marginTop: "4px",
              paddingRight: "5px",
              paddingLeft: "5px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}>
              Vendor
            </Typography>
          </Grid>
          <Typography variant="body2"style={{
            font: "Inter",
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#474747",
            letterSpacing: "0.02em",
            lineHeight: "24px",
            marginTop: "5px",
          }}>
          Aliqua id fugiat nostrud irure
          ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint
          deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud
          irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt
          mollit dolore cillum minim tempor enim.
          </Typography>
        </Grid>
       </Grid>
       <Grid item xs={12} container className={classes.footer}>
        <Grid item xs={6}>
          <img src={banner} alt="Phone banner" className={classes.phoneBanner} />
        </Grid>
        <Grid item xs={5} container style={{
          display: "flex",
          flexDirection: "column", 
          justifyContent: "start",
        }}>
          <Grid container style={{
            display: "flex",
            flexDirection: "row",
          }}>
            <Typography variant="h4" className={classes.member}>
              Be a member<br /> of our community
            </Typography>
            <img src={cele} alt="celebration icon" className={classes.celeIcon} />
          </Grid>
          <Typography variant="body1"style={{
            font: "Roboto",
            fontweight: "normal",
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#fff",
            letterSpacing: "0.02em",
            marginTop: "16px",
        }}>
            We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world. 
        </Typography>
        <Input type="text" id="searcher" className={classes.searchInput} placeholder="enter your email address"></Input>
        <Button className={classes.searchButton}>Subscribe</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container className={classes.footer2}>
        <Grid item xs={2} style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "50px",
          marginTop: "30px",
        }}>
          <h3>Company</h3>

          <Typography variant="body1" style={{ marginTop: "30px" }}>About us</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Term of Use</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Privacy Policy</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Press & Media</Typography>
        </Grid>
        <Grid item xs={2} style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}>
          <h3>Products</h3>

            <Typography variant="body1" style={{ marginTop: "30px" }}>Marketplace</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Magazine</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Seller</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Wholesale</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Services</Typography>
        </Grid>
        <Grid item xs={2} style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}>
          <h3>Careers</h3>

            <Typography variant="body1" style={{ marginTop: "30px" }}>Become a Campus Rep</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Become a Vasiti Influencer</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Become a Campus Writer</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Become an Affliate</Typography>
        </Grid>
        <Grid item xs={2} style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}>
          <h3>Get in touch</h3>

            <Typography variant="body1" style={{ marginTop: "30px" }}>Contact us</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Partner with us</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Advertise with us</Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>Help/FAQs</Typography>
        </Grid>
        <Grid item xs={2} style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}>
          <h3>Join our community</h3>

          <div className={classes.icons}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
          <Typography variant="body1" style={{ marginTop: "30px", marginBottom: "10px" }}>
            Email Newsletter
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;