import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import MiniVideoPlayer from "./MiniVideoPlayer";
import { Link } from "react-router-dom";
import VideoInfo from "../../shared/models/video/VideoInfo";

interface VideoProps{
  videoInfo:VideoInfo;
}

const Video:React.FC<VideoProps> = ({videoInfo}) => {
  const [isHover, setHover] = useState(false);

  return (
    <section
      className="w-[360px] aspect-video bg-black shadow-md "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/video/${videoInfo.id}`}>
        <div className="w-full h-full relative">
          {isHover ? (
            <MiniVideoPlayer url={videoInfo.teaser_url}/>
          ) : (
            <img
              className=" w-full h-full object-cover z-20"
              src={videoInfo.preview_url ?? "/images/videos/example.webp"}
              alt={`video with index ${videoInfo.title}`}
            />
          )}

          <div className=" absolute bottom-0 w-full h-[40px] z-40 bg-[rgb(0,0,0,0.5)] flex items-center justify-between px-2">
            <h2 className="text-white">{videoInfo.title}</h2>
            <div className="flex items-center gap-2">
              <IoTimeOutline size={30} color="white" />
              <p className="text-white">20:31</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Video;
