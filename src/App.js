// Components
import Demo from "./containers/Demo";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5",
    },
  },
});

function App() {
  return (
    <div className="App bg-black text-white h-screen">
      <ThemeProvider theme={theme}>
        <Demo />
      </ThemeProvider>
    </div>
  );
}

export default App;
