"use client";

import React from "react";
import Image from "next/image";
import Portal from "#/components/portal";
import {
    TransformWrapper,
    TransformComponent,
    ReactZoomPanPinchProps
} from "react-zoom-pan-pinch";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";
import { TbZoomReset } from "react-icons/tb";

type ControlsProps = {
    zoomIn: () => void;
    zoomOut: () => void;
    reset: () => void
}

function Controls({ zoomIn, zoomOut, reset }: ControlsProps) {
    return (
        <div className="flex items-center justify-center gap-3 mt-5">
            <button className="flex items-center gap-2 bg-white rounded-md px-3 py-2 md:py-1.5 select-none" onClick={zoomIn}>
                <LuZoomIn />
                <p className="hidden md:block text-sm font-normal">Zoom in</p>
            </button>
            <button className="flex items-center gap-2 bg-white rounded-md px-3 py-2 md:py-1.5 select-none" onClick={zoomOut}>
                <LuZoomOut />
                <p className="hidden md:block text-sm font-normal">Zoom out</p>
            </button>
            <button className="flex items-center gap-2 bg-white rounded-md px-3 py-2 md:py-1.5 select-none" onClick={reset}>
                <TbZoomReset />
                <p className="hidden md:block text-sm font-normal">Reset</p>
            </button>
        </div>
    )
}

export default function GalleryCard(props: { title: string; image: string }) {
    const [showModal, setSetModal] = React.useState(false)

    function toggle() {
        setSetModal((prev) => !prev)
    }

    return (
        <React.Fragment>
            <figure className="relative rounded-xl overflow-hidden" onClick={toggle}>
                <div className="size-full" aria-label="image-wrapper">
                    <Image src={props.image} alt="project-image" className="size-full object-cover" width={500} height={500} />
                </div>
                <figcaption className="absolute left-0 right-0 bottom-0 bg-black/50 h-10 md:h-20 flex items-center">
                    <p className="pl-5 text-xs md:text-base">{props.title}</p>
                </figcaption>
            </figure>
            <Portal isOpen={showModal} onClose={toggle}>
                <div>
                    <TransformWrapper>
                        {({ zoomIn, zoomOut, resetTransform }) => {
                            const zoomInAction = () => zoomIn(0.5)
                            const zoomOutAction = () => zoomOut(0.5)
                            const resetAction = () => resetTransform(500)
                            return (
                                <React.Fragment>
                                    <TransformComponent>
                                        <Image src={props.image} alt="project-image" className="size-full object-cover" width={500} height={500} />
                                    </TransformComponent>
                                    <Controls zoomIn={zoomInAction} zoomOut={zoomOutAction} reset={resetAction} />
                                </React.Fragment>
                            )
                        }}
                    </TransformWrapper>
                </div>
            </Portal>
        </React.Fragment>
    )
}
