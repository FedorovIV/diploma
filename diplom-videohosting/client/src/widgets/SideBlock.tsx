import React, { useState } from "react";

interface SideBlockProps {
  isRight: boolean;
  imageSrc: string;
}

const SideBlock: React.FC<SideBlockProps> = ({ isRight, imageSrc }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className={`absolute ${
        isRight ? "right-0" : "left-0"
      } top-0  h-full w-1/6 md:block hidden shadow-2xl`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`w-full h-full relative ${isHover && "blur-sm"}`}>
        <p
          className={`absolute top-1/2 left-1/4 text-[3vw] p-[1vw] ${
            isRight ? "bg-[rgba(173,62,62,0.7)]" : "bg-[rgb(0,0,0,0.7)]"
          }  text-white font-bold rounded-[3vh] z-40`}
        >
          {isRight ? "Enjoy" : "Get"}
        </p>
        <img src={imageSrc} className="h-full object-cover z-30" />
      </div>
      {isHover && (
        <div className="w-full absolute top-1/3 flex justify-center ">
          <button className="button_gradient rounded-md font-bold px-2 text-[2.5vw] active:scale-110 duration-150">
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBlock;
