import Image from "next/image";

function GalleryCard(props: { title: string; image: string }) {
    return (
        <figure className="relative rounded-xl overflow-hidden">
            <div className="size-full" aria-label="image-wrapper">
                <Image src={props.image} alt="project-image" className="size-full object-cover" width={500} height={500} />
            </div>
            <figcaption className="absolute left-0 right-0 bottom-0 bg-black/50 h-20 flex items-center">
                <p className="pl-5">{props.title}</p>
            </figcaption>
        </figure>
    )
}

export default function Gallery() {
    return (
        <section className="container text-white pt-32 space-y-20">
            <h2 className="font-bold text-xl text-center -tracking-wide">Gallery of the Game</h2>
            <div className="grid grid-cols-2 gap-5" aria-label="galleries">
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
            </div>
        </section>
    )
}