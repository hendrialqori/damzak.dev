import GalleryCard from "./gallery-card";

export default function Gallery() {
    return (
        <section className="container text-white pt-24 md:pt-32 space-y-10 md:space-y-20">
            <h2 className="text-base md:text-xl font-bold text-center -tracking-wide">Gallery of the Game</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5" aria-label="galleries">
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
                <GalleryCard image="/bmw.jpg" title="Splace Screen" />
            </div>
        </section>
    )
}