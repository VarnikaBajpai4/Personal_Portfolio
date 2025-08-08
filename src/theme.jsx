import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Chikarego2, ui-sans-serif, system-ui",
    button: { textTransform: "none", fontWeight: 800 },
  },
  palette: {
    primary: { main: "#4A90E2" },
    mode: "light",
  },
  shape: { borderRadius: 8 },
});

export default theme;
