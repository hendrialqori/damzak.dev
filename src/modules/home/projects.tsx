import Image from "next/image"
import Link from "next/link";

function ProjectCard(props: { id: number; title: string; year: number; image: string }) {
    return (
        <div className="space-y-7">
            <h3 className="font-semibold -tracking-wide">{props.title} - {props.year}</h3>
            <div className="relative center-flex h-[200px] rounded-2xl overflow-hidden">
                <Image
                    className="absolute size-full object-cover"
                    src={props.image}
                    alt="project-banner"
                    width={600}
                    height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/30" aria-label="filter" />
                <Link href={`/project/1`} className="z-10">
                    <div
                        className="text-sm w-max bg-white/10 hover:bg-white/40 transition-colors duration-300 rounded-full border border-[#6D6D6D] py-2 px-5">
                        See details
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section className="container text-white pb-32 space-y-10 relative">
            <div className="space-y-1">
                <h2 className="text-xl font-bold -tracking-wider">Projects</h2>
                <p className="text-primary_purple">A few things i’ve been building</p>
            </div>
            <div className="space-y-10">
                <ProjectCard
                    id={1}
                    title="Black Myth Wukong"
                    year={2024}
                    image="/black-myth-wukong.jpg"
                />
                <ProjectCard
                    id={1}
                    title="Black Myth Wukong"
                    year={2024}
                    image="/black-myth-wukong.jpg"
                />
            </div>
        </section>
    )
}