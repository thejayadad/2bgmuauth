
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Box from '@mui/material/Box';
import Create from "./pages/Create";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />

      </Routes>
    </div>
  );
}

export default App;
