"use client"

import React from "react"
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Gameplay() {
    const videoRef = React.useRef<HTMLVideoElement | null>(null)
    const [hasControls, setHasControls] = React.useState(false)
    const [showPlayButton, setShowPlayButton] = React.useState(true)

    async function playVideo() {
        if (!hasControls) {
            videoRef.current?.play()
            setHasControls(true)

        }
        else {
            videoRef.current?.pause()
            setHasControls(false)
            setShowPlayButton(true)
        }
    }

    function mouseEnter() {
        setShowPlayButton(true)
    }

    function mouseLeave() {
        if (!hasControls) return
        setShowPlayButton(false)
    }

    return (
        <section className="container text-white space-y-20 py-32">
            <h2 className="font-bold text-xl text-center -tracking-wide">A glimps of game play</h2>
            <div className="relative center-flex w-full aspect-video"
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
                    <FaRegCirclePlay className="text-5xl" />
                </button>
            </div>
        </section>
    )
}