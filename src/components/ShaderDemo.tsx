import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function ShaderDemo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interactive Shader Animation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A real-time GPU-powered shader animation built with Three.js and WebGL
          </p>
        </div>
        
        <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br from-purple-900 to-blue-900">
          <ShaderAnimation/>
          <span className="absolute pointer-events-none z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
            Shader Animation
          </span>
        </div>
      </div>
    </section>
  )
}