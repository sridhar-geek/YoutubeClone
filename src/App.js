import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { ChannelDetails, Home, VideoDetails, Search, Navbar } from "./Pages";

export default function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
    </Box>
  );
}
