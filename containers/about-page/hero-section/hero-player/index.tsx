"use client";
import { Pause } from "@/components/Icons/Pause";
import { Play } from "@/components/Icons/Play";
import { playerTimeFormatter } from "@/libs/utils";
import React, { FC, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface AboutHeroPlayerProps {}

const AboutHeroPlayer: FC<AboutHeroPlayerProps> = ({}) => {
  const [duration, setDuration] = useState<number>(0);
  const [currentPos, setCurrentPos] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isControllersActive, setIsControllersActive] = useState(true);

  const player = useRef<ReactPlayer>(null);
  //You may not like it, but this is what a peek performance looks like xD
  const seekHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    const boundingRect = target.getBoundingClientRect();
    const clickedX = e.clientX - boundingRect.left;

    const divWidth = boundingRect.width;
    const percentageX = (clickedX / divWidth) * 100;
    if (duration && player.current) {
      player.current.seekTo(
        Math.ceil((percentageX * duration) / 100),
        "seconds"
      );
      setIsPlaying(true);
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);

  //Manually checking that if it's loaded for avoiding hydration issues
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div
      onMouseEnter={() => setIsControllersActive(true)}
      onMouseLeave={() => setIsControllersActive(false)}
      className="w-full h-full relative overflow-hidden"
    >
      {isLoaded && (
        <ReactPlayer
          playing={isPlaying}
          onStart={() => setIsPlaying(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onReady={() => setIsMuted(false)}
          volume={0.1}
          ref={player}
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          muted={isMuted}
          height="100%"
          onProgress={(e) => setCurrentPos(e.playedSeconds)}
          onDuration={(e) => setDuration(e)}
        />
      )}
      <div
        className="absolute w-full h-max py-[30px] px-[50px] flex flex-col gap-5 bottom-0 transition-all "
        style={!isControllersActive ? { bottom: "-32rem" } : { bottom: "0" }}
      >
        {
          <>
            <div className="relative" onClick={seekHandler}>
              <div className="w-full relative bg-gray-400 h-1  cursor-pointer" />
              <div
                style={{
                  width: `${Math.ceil((currentPos / duration) * 100)}%`,
                }}
                className="absolute left-0 top-0 bg-white h-1  pointer-events-none"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-4">
                <div
                  className="cursor-pointer"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause /> : <Play />}
                </div>
                <span>{playerTimeFormatter(currentPos)}</span>
              </div>
              <span>{playerTimeFormatter(duration)}</span>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default AboutHeroPlayer;
