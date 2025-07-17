import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import { useTheme, Typography, Button, Box } from "@mui/material";

const Settings = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>

      <Typography variant="subtitle1">
        Current Theme: {theme.palette.mode.toUpperCase()}
      </Typography>

      <Button
        onClick={colorMode.toggleColorMode}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Toggle Theme
      </Button>
    </Box>
  );
};

export default Settings;
