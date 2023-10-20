import axios from "axios";

const BaseUrl = "https://youtube-v31.p.rapidapi.com";

export const getVideos = async (url) => {
  try {
    const response = await axios.get(`${BaseUrl}/${url}`, {
      params: {
        maxResults: "50"
      },
      headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Key": "30b2d85b06msh4321b8e7778b23cp1bcbdejsn949665ce2850",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
