import react from "react";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, Grid, Button, Paper, Typography, Input } from "@material-ui/core";
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
  },
  menuList: {
    display: "flex",
    marginLeft: "7rem",
    marginTop: "10px",
    flex: "1",
    outline: "none",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flex: "none",
      width: "100%",
      alignItems: "center",
    },
  },
  testimonyHeader: {
    backgroundColor: "#222222",
    width: "100vw",
    height: "636px",
    marginTop: "-4px",
    border: "1px solid #222222",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
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
  },
  testimonyArea: {
    backgroundColor: "#fff",
    width: "100vw",
    height: "636px",
    border: "1px solid #fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footer: {
    backgroundColor: "#25201D",
    width: "100vw",
    height: "379px",
    border: "1px solid #25201D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#fff",
  },
  icons: {
    display: "flex",
    justifyContent: "start",
    // justifyItem: "space-around",
    padding: "5px",
    marginTop: "45px",
  },
  searchInput: {
    color: "#222222",
    background: "#fff",
    height: "35px",
    width: "50%",
    marginTop: "40px",
    border: "1px solid #222222",
    borderRadius: "4px",
    fontSize: "18px",
    font: "Roboto",
  },
  searchButton: {
    color: "#222222",
    border: "1px solid #222222",
    borderRadius: "4px",
    background: "#fff",
    font: "Roboto",
    fontSize: "14px",
    marginTop: "-35px",
    width: "15%",
    height: "35px",
    fontWeight: "bold",
    marginLeft: "35%",
  }
}));


const Testimonial = () => {
  const classes = useStyles();

  return (
    <div>
      {/*navbar grid*/}
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
      <Grid item xs={11} container style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: "5rem",
    }}>
      <Grid item xs={6} style={{
        marginTop: "8rem",
      }}>
        <Typography variant="h3" style={{
          fontWeight: "700",
        }}>
          Amazing <br />
          Experiences from Our Wonderful Customers
        </Typography>
        <Typography variant="body1"style={{
          fontweight: "400",
          fontStyle: "normal",
          fontSize: "18px",
          color: "#494949",
          letterSpacing: "1px",
          marginTop: "2rem",
        }}>
          Here is what customers and vendors are saying about <br /> us,
          you can share your stories with us too.
        </Typography>
      </Grid>
      <Grid item xs={5} style={{
        marginRight: "80px",
        marginTop: "1rem",
      }}>
        <img src={Testimonial1} alt="Testimonial Logo 1" style={{ width: "100%" }} />
      </Grid>
      </Grid>
      <Grid item xs={12} container className={classes.testimonyHeader}>
        <Grid item xs={6} style={{
          marginLeft: "40px",
          marginTop: "30px",
          background: `url(${Ellipse})`,
          height: "90%",
          width: "90%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
          <img src={ladiesSmile} alt="Ladies Smiling" style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item xs={5} container style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginLeft: "50px",
        }}>
          <Typography variant="h4" style={{
            color: "#fff",
            marginTop: "6rem",
          }}>
            Tolu & Joy's Experience
          </Typography>
          <Typography variant="button" style={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "4px",
            width: "100px",
            marginTop: "-40px",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}>
            Customer
          </Typography>
          <Typography variant="body1"style={{
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "18px",
            color: "#fff",
            letterSpacing: "1px",
            marginTop: "-30px",
        }}>
          I had the best experience shopping with vasiti.<br />
          Usability of the website was great, very good<br />
          customer service, an all round great<br />
          experience. I would definitely be coming back!<br />
          I had the best experience shopping with vasiti.<br />
          Usability of the website was great, very good<br />
          customer service, an all round great<br />
          experience. I would definitely be coming back!<br /> 
        </Typography>
        <Typography variant="body1"style={{
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "18px",
            color: "#fff",
            letterSpacing: "1px",
            marginTop: "-30px",
        }}>
          SHARE YOUR OWN STORY!
        </Typography>
        <img src={Vector} alt="Vector" width="275" style={{marginTop: "-67px" }} />
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
        <Grid item xs={5} container style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          marginLeft: "60px",
        }}>
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
          I had the best experience shopping with vasiti.<br />
          Usability of the website was great, very good<br />
          customer service, an all round great<br />
          experience. I would definitely be coming back!<br />
          I had the best experience shopping with vasiti.<br />
          Usability of the website was great, very good<br />
          customer service, an all round great<br />
          experience. I would definitely be coming back!<br /> 
        </Typography>
        <Typography variant="body1"style={{
            fontweight: "400",
            fontStyle: "normal",
            fontSize: "18px",
            color: "#FF5C00",
            letterSpacing: "1px",
            marginTop: "70px",
        }}>
          SHARE YOUR OWN STORY!
        </Typography>
        <img src={Vector} alt="Vector" width="275" style={{ marginTop: "-1px" }} />
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
       <Grid item xs={12} container className={classes.footer} style={{ marginTop: "109px" }}>
        <Grid item xs={6}>
          <img src={banner} alt="Phone banner" style={{ marginLeft: "80px", marginTop: "-45px" }} />
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
            <Typography variant="h4" style={{
              color: "#fff",
              marginTop: "80px",
              lineHeight: "40px",
              size: "40px",
              fontStyle: "normal",
              fontWeight: "bold",
              LetterSpacing: "-0.03em",
            }}>
              Be a member<br /> of our community
            </Typography>
            <img src={cele} alt="celebration icon" style={{ marginTop: "115px" }} />
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
            We’d make sure you’re always first to know what’s<br />happening on Vasiti—thus, the world. 
        </Typography>
        <input type="text" id="searcher" className={classes.searchInput} />
        <Button className={classes.searchButton}>Search</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container className={classes.footer}>
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
          <Typography variant="body1" style={{ marginTop: "30px" }}>
            Email Newsletter
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;