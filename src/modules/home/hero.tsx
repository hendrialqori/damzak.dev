import Image from "next/image"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="pt-9 flex justify-between items-center">
            <button className="font-extrabold bg-white/10 rounded-full border border-[#6D6D6D] py-3 px-5">
                damzak.dev
            </button>
            <div className="center-flex gap-5">
                <a href="#" target="_blank" rel="noopener">
                    <div className="center-flex gap-x-3 hover:underline">
                        <FaLinkedinIn />
                        <span className="text-sm font-medium" aria-hidden aria-label="linkedin">LinkedIn</span>
                    </div>
                </a>
                <a href="#" target="_blank" rel="noopener">
                    <div className="center-flex gap-x-3 hover:underline">
                        <FaGithub />
                        <span className="text-sm font-medium" aria-hidden aria-label="github">Github</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <section className="font-mulish max-h-screen w-full relative bg-black" aria-label="navigation header & hero banner">
            <div className="absolute inset-0 z-10 select-none" aria-label="banner">
                <div className="size-full bg-black/80 absolute" aria-label="overlay" />
                <Image src="/banner.webp" className="size-full object-cover" width={1000} height={1000} priority alt="banner" />
            </div>
            <div className="relative container text-white z-20" aria-label="content">
                <Header />
                <div className="flex justify-between items-center h-[calc(100vh_-_200px)]">
                    <div className="relative flex flex-col gap-y-5 w-max">
                        <p className="text-primary_purple font-medium">Hi Everyone, i’m</p>
                        <div className="text-5xl space-y-1">
                            <h1 className="font-extrabold -tracking-wider">Adam</h1>
                            <h1 className="font-extralight">Zaky Rahman</h1>
                        </div>
                        <p className="font-extralight ml-auto mr-0">an Unity Developer</p>
                        <button className="text-sm w-max bg-white/10 hover:bg-white/40 transition-colors duration-300 rounded-full border border-[#6D6D6D] py-2 px-5">
                            Hire me
                        </button>
                        <svg width="17" height="17" viewBox="0 0 17 17"
                            fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-5 right-0"
                        >
                            <path d="M16.08 8.04C16.08 12.4804 12.4804 16.08 8.04 16.08C3.59963 16.08 0 12.4804 0 8.04C0 3.59963 3.59963 0 8.04 0C12.4804 0 16.08 3.59963 16.08 8.04ZM2.38462 8.04C2.38462 11.1634 4.91662 13.6954 8.04 13.6954C11.1634 13.6954 13.6954 11.1634 13.6954 8.04C13.6954 4.91662 11.1634 2.38462 8.04 2.38462C4.91662 2.38462 2.38462 4.91662 2.38462 8.04Z" fill="#AFB4FC" />
                        </svg>
                    </div>
                    <div className="max-w-[340px]" aria-label="description">
                        <p className="text-sm !leading-[180%]">
                            Specialize in creating immersive experiences across Game development,
                            virtual reality (VR), and augmented reality (AR). With a deep understanding of Unity’s powerful engine and tools
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}