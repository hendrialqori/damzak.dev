import Footer from "#/modules/detail-project/footer"
import Gallery from "#/modules/detail-project/gallery"
import Gameplay from "#/modules/detail-project/gameplay"
import Hero from "#/modules/detail-project/hero"
import Story from "#/modules/detail-project/story"

type Props = {
    params: {
        id: number
    }
}

export default function DetailProject(props) {
    return (
        <main className="bg-black font-mulish">
            <Hero />
            <Story />
            <Gallery />
            <Gameplay />
            <Footer />
        </main>
    )
}