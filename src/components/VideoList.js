import { render } from "react-dom";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
