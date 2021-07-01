import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { RadioGroup, Radio } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: theme.spacing(10),
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
  },
  storySharer: {
    display: "flex",
    justifyContent: "center",
  },
  story: {
    fontSize: "28px",
    fontWeight: "700",
    LineSpacing: "-0.02em",
    color: "#000000",
    LineHeight: "34px",
    marginTop: "57px",
  },
  root: {
    '& > *': {
      margin: theme.spacing(5),
      
    },
  },
  uploadLabel: {
    marginBottom: "13px",
  },
  input: {
    display: "none",
  },
  inputArea: {
    border: "1px solid #EAEAEA",
    borderSizing: "border-box",
    backgroundColor: "#FEFEFE",
    borderRadius: "8px",
    marginTop: "0px",
    height: theme.spacing(5),
    width: theme.spacing(59),
    display: "flex",
    flexDirectio: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(43)
    },
  },
  form: {
  },
  formArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personal: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  formLabels: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "#676767",
  },
  inputElements: {
    color: "#4A4A4A",
    border: "1px solid #EAEAEA",
    backgroundColor: "rgba(254, 254, 254, 0.3)",
    width: theme.spacing(29),
    height: theme.spacing(5),
    boxSizing: "border-box",
    padding: "10px",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(20),
    },
  },
  inputElement: {
    color: "#4A4A4A",
    border: "1px solid #EAEAEA",
    backgroundColor: "rgba(254, 254, 254, 0.3)",
    width: theme.spacing(60),
    height: theme.spacing(15),
    boxSizing: "border-box",
    padding: "10px",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(43),
    },
  },
  personal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    
  },
  button: {
    width: theme.spacing(30),
    height: theme.spacing(7),
    backgroundColor: "#FF5C00",
    color: "#fff",
    marginLeft: theme.spacing(30),
    marginBottom: theme.spacing(5),
    boxShadow: "2px 8px 30px rgba(230, 83, 0, 0.18)",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FF5C50"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(13),
    },
  },
  radio: {
    marginTop: "-11px",
    '&$checked': {
      color: "#FF5C00",
    },
  },
  checked: {}
}));


const ShareStory = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.bg}>
      <CssBaseline />
      <div className={classes.storySharer}>
        <Typography variant="h1" className={classes.story}>
          Share your amazing story!
        </Typography>
      </div>
      <div className={classes.root}>
        <Typography variant="body1" className={classes.uploadLabel}>
          Upload your Picture
        </Typography>
        <div className={classes.inputArea}>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          multiple
          type="file"
        />
        <Typography variant="body1" style={{
          marginLeft: "20px",
          color: "#676767",
          fontFamily: "Roboto"
        }}>
          Choose Image
        </Typography>
        <label htmlFor="icon-button-file">
          <IconButton color="#000000" aria-label="upload picture" component="span">
            <AttachFileIcon />
          </IconButton>
        </label>
        </div>
          <form className={classes.form}>
            <div className={classes.formArea}>
              <div className={classes.personal}>
                <Typography className={classes.formLabels}>
                  First Name
                </Typography>
                <input 
                  variant="outlined" 
                  type="text"
                  fullWidth={true}
                  className={classes.inputElements}
                />
              </div>
              <div className={classes.personal}>
                <Typography className={classes.formLabels}>
                  Last Name
                </Typography>
                <input 
                  variant="outlined" 
                  type="text"
                  fullWidth={true}
                  className={classes.inputElements}
                />
                </div>
            </div>
            <div className={classes.personal}>
              <Typography className={classes.formLabels}>
                Share your Story
              </Typography>
              <textarea 
                  variant="outlined" 
                  type="text"
                  fullWidth={true}
                  className={classes.inputElement}
                />
            </div>
            <div className={classes.personal2}>
              <Typography className={classes.formLabels}>
                What did you interact with Vasiti as?
              </Typography>
              <RadioGroup
                className={classes.radio}
                row
                aria-label="role"
                name="role"
              >
                <FormControlLabel
                  control={<Radio  disableRipple
                    classes={{root: classes.radio, checked: classes.checked}} style={{ marginTop: "1px" }} />}
                  label="Customer"
                  labelPlacement="end"
                  value="Customer"
                />
                <FormControlLabel
                  control={<Radio disableRipple
                    classes={{root: classes.radio, checked: classes.checked}} style={{ marginTop: "1px" }} />}
                  label="Vendor"
                  labelPlacement="end"
                  value="Vendor"
                />
              </RadioGroup>
            </div>
            <div className={classes.personal}>
              <Button 
              component={Link} to="/StoryShare"
              className={classes.button}>
                Share your story!
              </Button>
            </div>
          </form>
      </div>
    </Container>
  );
};

export default ShareStory;