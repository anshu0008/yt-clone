import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia,Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoDetailsCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      display: 'flex', flexDirection: 'row',
      width: { xs: "100%", lg: "380px" },
      boxShadow: "none",
      height:'120px',
      borderRadius: 0,
      backgroundColor:'#0f0f0f',
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          style={{height:'120px',width:'180px',objectFit:'contain',scale:'1 1.3',borderRadius:'35%'}}
        />
      </Link>
    <CardContent sx={{backgroundColor: "#0f0f0f", height: "120px",width:"100%" }}>
      <Box flexDirection='column'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF" fontSize='14px'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray" fontSize='12px'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
      </Box>
    </CardContent>
  </Card>
);

export default VideoDetailsCard;
