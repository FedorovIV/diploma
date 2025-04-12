import ReactPlayer from "react-player/lazy";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      width={"100%"}
      height={"100%"}
      playing={true}
      controls={true}
    />
  );
};

export default VideoPlayer;
