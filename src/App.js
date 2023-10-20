import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { ChannelDetails, Home, VideoDetails, Search } from "./Pages";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="serch/:searchTerm" element={<Search />} />
      </Routes>
    </Box>
  );
}
