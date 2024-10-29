import { GradientEffect } from "#/components/gradient-effect";

export default function Story() {

    function PointBadge({ property, value }: Record<"property" | "value", string>) {
        return (
            <div className="space-y-2">
                <p className="text-xs md:text-sm bg-purple text-white w-max px-2 rounded-xl">{property}</p>
                <h3 className="font-semibold text-xs md:text-sm xl:text-base">{value}</h3>
            </div>
        )
    }

    return (
        <section className="relative text-white pt-24 md:pt-32 overflow-hidden">
            <GradientEffect className="-top-48 left-0 scale-90" />
            <div className="container space-y-10">
                <div className="space-y-2 md:space-y-5">
                    <h2 className="text-sm md:text-base xl:text-xl font-bold">
                        Description
                    </h2>
                    <p className="font-medium text-xs md:text-sm lg:text-base leading-5">
                        Terinspirasi dari novel Journey to the West, Game Black Myth Wukong menghidupkan kembali
                        cerita klasik Sang Kera Sakti bernama Sun Wukong yang sangat menarik untuk dijelajahi.
                        Menariknya, game PS5 ini menyajikan cerita epik yang sangat kaya dengan mitologi, legenda,
                        dan nilai-nilai budaya Tiongkok. Hal itu akan kamu temukan mulai dari desain karakternya,
                        kostum, hingga latar lingkungan yang disajikan dalam dunia game ini.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-10">
                    <PointBadge property="Release date" value="July 2020" />
                    <PointBadge property="Platform" value="WebGL, Android" />
                    <PointBadge property="Genre" value="Puzzle, Escape Room" />
                    <PointBadge property="Engine" value="Unity" />
                </div>
                <div className="space-y-5">
                    <h2 className="text-sm md:text-base xl:text-xl font-bold">
                        Highlighted Features
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base">- 3 Level with varying puzzle difficulty and interaction</p>
                </div>
            </div>
        </section>
    )
}
