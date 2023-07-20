import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Roboto', // Replace 'Your Desired Font' with your preferred font
  },
});
function App() {
  return (
    <ThemeProvider theme={customTheme}>
    <div className="App">
     <LandingPage />
    </div>
    </ThemeProvider>
  );
}

export default App;
