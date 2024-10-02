import { merge } from "#/lib/utils"

export function GradientEffect({ className }: { className?: string }) {
    return (
        <div className={merge("grid grid-cols-2 absolute z-10 -space-x-10", className)}>
            <div className="size-52 rounded-full bg-blue-400 blur-[250px]" />
            <div className="size-52 rounded-full bg-tosca blur-[250px]" />
            <div className="size-52 rounded-full bg-purple translate-x-1/2 -translate-y-16 blur-[250px]" />
        </div>
    )
}