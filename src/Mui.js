import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button, CssBaseline} from '@mui/material';
import {deepOrange, deepPurple} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: deepPurple,
  },
});

function Mui () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Button variant="contained" color="primary">
            Click me
        </Button>
    </ThemeProvider>
  );
}

export default Mui;