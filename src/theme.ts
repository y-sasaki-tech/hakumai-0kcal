import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F8F1E3",
      paper: "#FFF8EE"
    },
    primary: {
      main: "#C76B33"
    },
    secondary: {
      main: "#4E6B50"
    },
    text: {
      primary: "#2C231A"
    }
  },
  typography: {
    fontFamily: ["Noto Sans JP", "Hiragino Sans", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 12
  }
});
