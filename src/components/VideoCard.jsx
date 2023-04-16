import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia,Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from "@mui/material/Avatar";
import '../index.css'
import { fetchFromAPI } from "../utils/fetchFromAPI";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  color
}) =>{
  const [channelDetail, setChannelDetail] = useState();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${snippet?.channelId}`);

      setChannelDetail(data?.items[0]);

    };
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => setVideoDetail(data.items[0]))
    fetchResults();
  }, [snippet?.channelId]);

return (
  <Card
    sx={{
      width: { xs: "100%", sm: "300px", md: "300px",lg:"300px"},
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "320px", md: "320px",lg:"320px" }, height: '180px' ,objectFit:'contain',borderRadius:'10%' }}
        className="card_hover"
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#0f0f0f", height: "106px" }}>
      <Box display='flex' gap={2}>
    <Avatar alt="user" src={channelDetail?.snippet?.thumbnails?.high?.url} />
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 40) +' . . . ' || demoVideoTitle.slice(0, 40)+' . . . '}
        </Typography>
      </Link>
      </Box>
      <Box flexDirection='column' gap={2} marginLeft='55px'>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
        <Typography variant="subtitle2" color="gray">
        {new Date().getFullYear()-new Date(snippet?.publishTime).getFullYear() + ' years ago' } .  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
        </Typography>
      </Link>
      </Box>
    </CardContent>
  </Card>
)};

export default VideoCard;
