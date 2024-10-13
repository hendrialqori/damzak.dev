import { GradientEffect } from "#/components/gradient-effect";

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden pt-40 pb-20">
            <p className="text-xs md:text-sm font-medium text-center text-[#828282]">@damzak.dev 2024 - All rights reserved</p>
            <GradientEffect className="scale-[.5] top-32 left-1/2 -translate-x-1/2"/>
        </footer>
    )
}