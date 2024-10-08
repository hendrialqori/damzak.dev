import { GradientEffect } from "#/components/gradient-effect";
import Image from "next/image"
import { RiVerifiedBadgeFill } from "react-icons/ri";

type ExperienceProps = {
    avatar: string;
    companyName: string;
    role: string;
    workDuration: string;
    place: string;
    isLast?: boolean
}


function Experience({ avatar, companyName, role, workDuration, place, isLast }: ExperienceProps) {
    return (
        <div className="flex gap-5 h-28">
            <div className="w-7 center-flex flex-col justify-start">
                <div className="size-7 rounded-full bg-white">
                    <Image src={avatar} className="size-full" width={28} height={28} alt="icon" />
                </div>
                {!isLast && <div className="w-[1px] bg-white h-full" />}
            </div>
            <div className="space-y-1">
                <h2 className="font-medium">{companyName}</h2>
                <div className="center-flex justify-start">
                    <p className="font-bold">{role}</p>
                    <RiVerifiedBadgeFill className="text-[#00FF1A] text-xl" />
                </div>
                <div className="center-flex gap-x-3">
                    <p>{workDuration}</p>
                    <div className="size-2 rounded-full bg-primary_purple" />
                    <p>{place}</p>
                </div>
            </div>
        </div>
    )
}

export default function WorkExperiences() {
    return (
        <section className="container text-white py-32 space-y-10 relative">
            <div className="space-y-1">
                <h2 className="text-xl font-bold -tracking-wider">Experiences</h2>
                <p className="text-primary_purple">Some company i have worked in there</p>
            </div>
            <div>
                <Experience
                    avatar="/shintavr.png"
                    companyName="Shinta VR"
                    role="Senior Unity Developer"
                    workDuration="Jul 2022 - Present · 2 yrs 3 mos"
                    place="Jakarta Selatan, Jakarta, Indonesia"
                />
                <Experience
                    avatar="/machine-vision-indonesia.png"
                    companyName="Machine Vision Indonesia"
                    role="Unity Developer"
                    workDuration="Aug 2020 - Jul 2022 · 2 yrs"
                    place="Surabaya, East Java, Indonesia"
                />
                <Experience
                    avatar="/gambir-studio.png"
                    companyName="Gambir Studio"
                    role="Unity Developer Intern"
                    workDuration="Aug 2019 - Oct 2019 · 3 mos"
                    place="Daerah Istimewa Yogyakarta, Indonesia"
                    isLast
                />
            </div>
            <GradientEffect className="bottom-0 right-0"/>
        </section>
    )
}