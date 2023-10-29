import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Slidebar from "../Components/Slidebar";
import VideoCard from "../Components/VideoCard";
import ChannelCard from "../Components/ChannelCard";
import { getVideos } from "../api/getVideos";

const Home = () => {
  const [category, setCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const Feed = async () => {
      const data = await getVideos(`search?part=snippet,id&q=${category}`);
      setVideos(data);
      console.log(data)
    };
    Feed();
  }, [category]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 }
        }}
      >
        <Slidebar category={category} setCategory={setCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Made by Sridhar all copyrights reserved
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {category} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Stack direction='row' flexWrap='wrap'justifyContent='start' gap={2}>
          {videos.map((video, i)=> (
            <Box key={i}>
              {video.id.videoId && <VideoCard video={video}/>}
              {/* {video.id.channelId && <ChannelCard video={video} />}  */}
            </Box>
          ))}
        </Stack>
=      </Box>
    </Stack>
  );
};

export default Home;
