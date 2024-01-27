import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue shade
    },
    secondary: {
      main: "#dc004e", // Red shade
    },
    // Add more colors as needed
  },
  typography: {
    // Define typography settings if needed
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
  // You can also customize other aspects like spacing, breakpoints, etc.
});

export default theme;
