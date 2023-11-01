import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
import { getVideos } from "../api/getVideos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getVideos(
        `channels?part=snippet,statistics&id=${id}`
      );
      setChannelDetails(data[0]);

      const response = await getVideos(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
    setVideos(response)
    };
    getData();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <VideoCard video={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
