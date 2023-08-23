"use client"
import { playerTimeFormatter } from '@/services/playerTimeFormatter'
import React, { FC, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

interface AboutHeroPlayerProps {
  
}

const AboutHeroPlayer: FC<AboutHeroPlayerProps> = ({  }) => {
    const [duration, setDuration] = useState<number>()
    const [currentPos, setCurrentPos] = useState<number>()
    const [isPlaying, setIsPlaying] = useState(true)
    const [isControllersActive, setIsControllersActive] = useState(true)
    
    const player = useRef<ReactPlayer>(null)
    //You may not like it, but this is what a peek performance looks like xD
    const seekHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement

        const boundingRect = target.getBoundingClientRect();
        const clickedX = e.clientX - boundingRect.left;

        const divWidth = boundingRect.width;
        const percentageX = (clickedX / divWidth) * 100;
        if(duration&&player.current){

            player.current.seekTo(Math.ceil((percentageX*duration) / 100),'seconds')
            setIsPlaying(true)
            
        }
    }


    const [isLoaded, setIsLoaded] = useState(false)
    
    //Manually checking that if it's loaded for avoiding hydration issues
    useEffect(() => {
      setIsLoaded(true)
    }, [])
  return (
    <div onMouseEnter={() => setIsControllersActive(true)} onMouseLeave={() => setIsControllersActive(false)} className='w-full h-full relative overflow-hidden'>
   {isLoaded&& <ReactPlayer volume={0.1} ref={player} playing={isPlaying} url='https://www.youtube.com/watch?v=Ui7AM-OqBGw' width='100%'
          height='100%' onProgress={(e) => setCurrentPos(e.playedSeconds)} onDuration={(e) => setDuration(e)}  config={{
            youtube: {
              playerVars: { showinfo: 321 }
            }}}/>}
     <div className='absolute w-full h-max py-[30px] px-[50px] flex flex-col gap-5 bottom-0 transition-all bg-[#000000b7] backdrop-blur-md ' style={!isControllersActive?{bottom:'-32rem'}:{bottom:'0'}}>
            {currentPos&&duration&&
            <>
        <div className='relative' onClick={seekHandler}>
            <div className='w-full relative bg-gray-400 h-1  cursor-pointer'/>
            <div style={{width:`${Math.ceil((currentPos/duration) * 100)}%`}} className='absolute left-0 top-0 bg-white h-1  pointer-events-none'/>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span>{playerTimeFormatter(currentPos)}</span>
            <span>{playerTimeFormatter(duration)}</span>
        </div>
        </>
        }
     </div>
    </div>
  )
}

export default AboutHeroPlayer;