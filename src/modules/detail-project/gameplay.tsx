"use client"

import React from "react"
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Gameplay() {
    const videoRef = React.useRef<HTMLVideoElement | null>(null)
    const [isPlay, setPlay] = React.useState(false)
    const [showPlayButton, setShowPlayButton] = React.useState(true)

    async function playVideo() {
        if (!isPlay) {
            videoRef.current?.play()
            setPlay(true)

        }
        else {
            videoRef.current?.pause()
            setPlay(false)
            setShowPlayButton(true)
        }
    }

    function mouseEnter() {
        setShowPlayButton(true)
    }

    function mouseLeave() {
        if (!isPlay) return
        setShowPlayButton(false)
    }

    return (
        <section className="container text-white space-y-10 md:space-y-20 py-24 md:py-32">
            <h2 className="text-md md:text-xl font-bold text-center -tracking-wide">A glimps of game play</h2>
            <div className="relative center-flex w-full aspect-video border border-gray-900 rounded-xl"
                onClick={playVideo} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            >
                <video ref={videoRef} className="rounded-xl overflow-hidden size-full">
                    <source src="/gameplay.mp4" />
                    Your browser not support playing video
                </video>
                <button
                    className="absolute hover:scale-90 transition duration-300"
                    style={{ opacity: showPlayButton ? 1 : 0 }}
                >
                    <FaRegCirclePlay className="text-3xl md:text-5xl" />
                </button>
            </div>
        </section>
    )
}