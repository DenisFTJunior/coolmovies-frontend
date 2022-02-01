import { createTheme } from "@mui/material";

const coolestMoviesTheme = createTheme({
  palette: {
    primary: {
      main: "#301553",
      light: "#8D46E8",
      contrastText: "white",
    },
    secondary: {
      main: "#0D541F",
      light: "#20A142",
      contrastText: "white",
    },
  },
});

export default coolestMoviesTheme;
