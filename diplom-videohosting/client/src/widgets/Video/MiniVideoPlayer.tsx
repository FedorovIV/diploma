import React, { CSSProperties, useState } from "react";
import ReactPlayer from "react-player";
import ClipLoader from "react-spinners/ClipLoader";

interface VideoPlayerProps {
  url: string;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const MiniVideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <ClipLoader
            color={"white"}
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <ReactPlayer
        url={url}
        width={"100%"}
        height={"100%"}
        playing={true}
        volume={0}
        onStart={() => setLoading(false)}
      />
    </div>
  );
};

export default MiniVideoPlayer;
