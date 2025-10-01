import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clue1 from "./pages/Clue1";
import Clue2 from "./pages/Clue2";
import Clue3 from "./pages/Clue3";
import Clue4 from "./pages/Clue4";
import Clue5 from "./pages/Clue5";
import Winner from "./pages/Winner";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clue1" element={<Clue1 />} />
      <Route path="/clue2" element={<Clue2 />} />
      <Route path="/clue3" element={<Clue3 />} />
      <Route path="/clue4" element={<Clue4 />} />
      <Route path="/clue5" element={<Clue5 />} />
      <Route path="/winner" element={<Winner />} />
    </Routes>
  );
}
