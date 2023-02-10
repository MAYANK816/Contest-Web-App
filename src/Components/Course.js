import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
const Course = () => {
    let VideoId = useParams();
    const opts = {
        height: '850',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
  return (
  <YouTube videoId={VideoId.id} opts={opts}  />
  )
}

export default Course