import { GradientEffect } from "#/components/gradient-effect"
import Image from "next/image"

export default function Profile() {
    return (
        <section className="relative text-white pt-24 lg:pt-32 overflow-hidden">
            <GradientEffect className="-top-48 left-0 scale-90"/>
            <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
                <div className="w-full lg:w-8/12 space-y-5">
                    <div className="space-y-1">
                        <h2 className="text-md md:text-xl font-bold -tracking-wider">About me</h2>
                        <p className="text-xs md:text-base text-primary_purple">Introducing my self</p>
                    </div>
                    <p className="!leading-[150%] text-xs md:text-sm lg:text-base">
                        I start learning Unity in 2017. Since then, I&apos;ve tried developing 2D and 3D games for my academic assignment, project, freelance and sometime
                        its just for fun. I&apos;ve published some of my games on Google Playstore  and itch io.
                    </p>
                    <p className="!leading-[150%] text-xs md:text-sm lg:text-base">
                        I&apos;m eager to learn something new, and I can work collaboratively in a  team. I feel thrilled when i talk about game technology,
                        and I hope I  can contribute to its development.
                    </p>
                </div>
                <Image
                    src="/zaky.png"
                    alt="profile-picture"
                    width={200}
                    height={200}
                />
            </div>
        </section>
    )
}