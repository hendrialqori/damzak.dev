import Image from "next/image"
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

function Header() {
    return (
        <Link href="/" className="pt-9 flex justify-between items-center">
            <button className="font-extrabold bg-white/10 rounded-full border border-[#6D6D6D] p-2 hover:bg-white/40 transition-colors duration-300">
                <FiArrowLeft className="text-xl" />
            </button>
        </Link>
    )
}

export default function Hero() {
    return (
        <section className="font-mulish max-h-screen w-full relative bg-black" aria-label="navigation header & hero banner">
            <div className="absolute inset-0 z-10 select-none" aria-label="banner">
                <div className="size-full bg-black/80 absolute" aria-label="overlay" />
                <Image src="/black-myth-wukong.jpg" className="size-full object-cover" width={1000} height={1000} priority alt="banner" />
            </div>
            <div className="relative container text-white z-20" aria-label="content">
                <Header />
                <div className="center-flex h-[calc(100vh_-_150px)]">
                    <div className="center-flex flex-col gap-5 -translate-y-10">
                        <div>
                            <p className="text-primary_purple">I build</p>
                            <h1 className="text-5xl -tracking-wide font-extrabold">Black Myth Wukong</h1>
                        </div>
                        <button className="text-sm w-max bg-white/10 hover:bg-white/40 transition-colors duration-300 rounded-full border border-[#6D6D6D] py-2 px-5">
                            Try playing
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}