import { GradientEffect } from "#/components/gradient-effect";

export default function Story() {
    return (
        <section className="relative text-white pt-24 md:pt-32 overflow-hidden">
            <GradientEffect className="-top-48 left-0 scale-90" />
            <div className="container space-y-5">
                <h2 className="text-md md:text-xl font-bold">
                    Story
                </h2>
                <p className="font-medium text-xs md:text-sm lg:text-base !leading-[150%!]">
                    Terinspirasi dari novel Journey to the West, Game Black Myth Wukong menghidupkan kembali
                    cerita klasik Sang Kera Sakti bernama Sun Wukong yang sangat menarik untuk dijelajahi.
                    Menariknya, game PS5 ini menyajikan cerita epik yang sangat kaya dengan mitologi, legenda,
                    dan nilai-nilai budaya Tiongkok. Hal itu akan kamu temukan mulai dari desain karakternya,
                    kostum, hingga latar lingkungan yang disajikan dalam dunia game ini.
                </p>
                <p className="font-light text-xs md:text-sm lg:text-base !leading-[150%!]">
                    Game Wukong ini akan mengajak kamu untuk berperan sebagai karakter legendaris Sun Wukong untuk mengumpulkan enam relik magis.
                    Namun, kamu harus melalui petualangan yang tidak mudah melewati lima area utama dengan sederet
                    tantangan besar yang menanti. Apalagi game ini juga menyajikan berbagai kejadian tidak terduga yang
                    harus dihadapi oleh pemainnya sehingga mampu memperkuat suasana mistisnya.
                </p>
            </div>
        </section>
    )
}