import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoDetailsCard, Loader, ChannelDetailsCard } from "./";

const VideoDetailVid = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoDetailsCard video={item} /> }
          {item.id.channelId && <ChannelDetailsCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default VideoDetailVid;
