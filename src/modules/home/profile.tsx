import Image from "next/image"

export default function Profile() {
    return (
        <section className="container flex justify-between items-end text-white mt-32">
            <div className="w-8/12 space-y-5">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold -tracking-wider">About me</h2>
                    <p className="text-primary_purple">Introducing my self</p>
                </div>
                <p className="!leading-[150%]">
                    I start learning Unity in 2017. Since then, I've tried developing 2D and 3D games for my academic assignment, project, freelance and sometime
                    its just for fun. I've published some of my games on Google Playstore  and itch io.
                </p>
                <p className="!leading-[150%]">
                    I'm eager to learn something new, and I can work collaboratively in a  team. I feel thrilled when i talk about game technology,
                    and I hope I  can contribute to its development.
                </p>
            </div>
            <Image 
                src="/zaky.png"
                alt="profile-picture"
                width={200}
                height={200}
                // className=""
            />
        </section>
    )
}