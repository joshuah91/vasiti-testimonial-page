import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography } from "@material-ui/core";
import cele from "../Images/cele.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: theme.spacing(10),
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
  },
  shareStory: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(5),
  },
  celeIcon: {
    width: theme.spacing(15),
    marginTop: theme.spacing(15),
  },
  thankArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  thank: {
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    width: theme.spacing(35),
    marginBottom: theme.spacing(2),
    color: "#000000",
  },
  subThank: {
    fontFamily: "Roboto",
    fontSize: "16px",
    textAlign: "center",
    color: "#4A4A4A",
    width: theme.spacing(45),
    marginBottom: theme.spacing(7),
  },
  button: {
    width: theme.spacing(30),
    height: theme.spacing(7),
    backgroundColor: "#FF5C00",
    color: "#fff",
    marginLeft: theme.spacing(20),
    marginBottom: theme.spacing(5),
    boxShadow: "2px 8px 30px rgba(230, 83, 0, 0.18)",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FF5C50"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(12),
    },
  },
}));

const StoryShare = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.bg}>
      <CssBaseline />
      <div className={classes.shareStory}>
        <img src={cele} alt="celebration icon" className={classes.celeIcon} />
      </div>
      <div className={classes.thankArea}>
        <Typography className={classes.thank}>
          Thank you for sharing your story!
        </Typography>
        <Typography className={classes.subThank}>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <Button
        className={classes.button}>
          Close
      </Button>
    </Container>
  );
};

export default StoryShare;