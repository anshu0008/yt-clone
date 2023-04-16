import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import '../index.css'
import { VideoDetailVid, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import Comments from '../components/Comments/Comment/Comments'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [click,SetClick]=useState(false);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);
  if(!videoDetail?.snippet) return <Loader />;
  const { snippet: { title, channelId, channelTitle, description
  }, statistics: { viewCount, likeCount } } = videoDetail;

  const handleClick=()=>{
    SetClick(!click);
  }

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} sx={{backgroundColor:"#0f0f0f"}}>
        <Box flex={0.9} marginLeft='10px' marginBottom='50px' marginRight='50px'>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
              <Typography sx={{marginLeft:"10px"}} color="gray">
                {!click ? description.slice(0,100) + '...' : description}{'\u00A0'}<span className="description" onClick={handleClick}>{click ? 'Show less': 'Show more'}</span>
              </Typography>
          </Box>
          <Comments
            currentUserId="1"
          />
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <VideoDetailVid videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
