import react from "react";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, Grid, Button, Paper, Typography } from "@material-ui/core";
import Navbar from "../Component/Navbar";
import Testimonial1 from "../Images/Testimonial1.png";
import Ellipse from "../Images/Ellipse.png";
import ladiesSmile from "../Images/ladiesSmile.png";
import Vector from "../Images/Vector.png";

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
    width: "100%",
    height: "636px",
    marginTop: "-4px",
    border: "1px solid #222222",
  },
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
        marginRight: "100px",
        marginTop: "1rem",
      }}>
        <img src={Testimonial1} alt="Testimonial Logo 1" style={{ width: "100%" }} />
      </Grid>
      </Grid>
      <Grid item xs={12} container className={classes.testimonyHeader} style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      }}>
        <Grid item xs={6} style={{
          marginLeft: "70px",
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
          marginRight: "-50px",
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
        <img src={Vector} alt="Vector" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;