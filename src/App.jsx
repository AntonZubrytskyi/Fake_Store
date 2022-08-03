import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes } from "./routes/Routes";
import { Box, Stack} from "@mui/material";

const App = () => {
  return (
    <>
      <Box>
        <Navbar/>
        <Stack direction="row"  justifyContent="space-between">
          <Sidebar/>
        </Stack>
      </Box>

      <Routes />
    </>

  );
}

export default App;
