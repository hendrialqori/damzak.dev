"use client"

import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion"
import { IoMdClose } from "react-icons/io";

function Content({ children }: { children: React.ReactNode }) {

    return ReactDOM.createPortal(
        <motion.section
            className="fixed inset-0 center-flex z-50"
            initial={{ opacity: 0, top: -30 }}
            animate={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: -30 }}
            transition={{ duration: 0.1 }}
        >
            <div
                className="z-[2] max-h-screen overflow-y-auto w-full flex justify-center py-5 px-2 lg:px-0"
                aria-label="content container">
                {children}
            </div>
            <div
                className="absolute inset-0 bg-black/80 z-1"
                aria-label="overlay" />
        </motion.section>,
        document?.body
    )
}


type PortalProps = {
    isOpen: boolean;
    onClose?: () => void
    children: React.ReactNode
}

export default function Portal({ isOpen, onClose, children }: PortalProps) {

    // set overvlow document body
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset"
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <Content>
                <button className="absolute top-5 right-5" onClick={onClose}>
                    <IoMdClose className="text-white text-2xl md:text-4xl" />
                </button>
                {children}
            </Content>
        </AnimatePresence>
    )
}