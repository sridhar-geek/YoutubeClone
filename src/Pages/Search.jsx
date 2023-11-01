import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { getVideos } from "../api/getVideos";
import { VideoCard } from "./";

const Search = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const getData = async()=> {
        const data = await getVideos(`search?part=snippet&q=${searchTerm}`);
        setVideos(data)
    }
    getData()
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<VideoCard video={videos} />}
      </Box>
    </Box>
  );
};

export default Search;
