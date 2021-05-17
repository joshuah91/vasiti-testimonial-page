import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3E23FF",
    },
    secondary: {
      main: "#343A48",
    },
  },
  typography: {
    h1: {
      fontSize: "70px",
      fontFamily: [
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  },
  breakpoints: {
    xm: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1920,
  },
  // overrides: {
  //   // Style sheet name ⚛️
  //   MuiMobileStepper: {
  //     // Name of the rule
  //     dot: {
  //       // Some CSS
  //       backgroundColor: "white",
  //     },
  //   },
  // },
});

export default theme;
