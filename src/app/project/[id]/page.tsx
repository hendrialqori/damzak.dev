import Hero from "#/modules/detail-project/hero"

type Props = {
    params: {
        id: number
    }
}

export default function DetailProject(props) {
    return (
        <main className="bg-black">
            <Hero />
        </main>
    )
}