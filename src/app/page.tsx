import Basketball3D from "@/components/Basketball3D";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-8 py-6 flex justify-between items-center z-10 relative">
        <div className="text-2xl font-black tracking-tighter uppercase text-orange-500">
          Hoop<span className="text-white">Craft</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">Collections</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase transition-colors">
          Cart (0)
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 relative flex flex-col items-center justify-center w-full px-4 sm:px-8">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0 relative z-10 h-full min-h-[600px]">
          
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 z-20">
            <h2 className="text-orange-500 font-bold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
              Pro Level Equipment
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              Dominate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                The Court
              </span>
            </h1>
            <p className="text-zinc-400 max-w-md text-lg mb-8 leading-relaxed">
              Experience unparalleled grip and control with our premium, game-ready basketballs engineered for champions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase transition-all transform hover:scale-105">
                Shop Now
              </button>
              <button className="border border-zinc-700 hover:border-white text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase transition-all">
                View Specs
              </button>
            </div>
          </div>

          {/* Center 3D Ball */}
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[800px] order-1 lg:order-2 relative z-30">
            <Basketball3D />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-3 z-20 hidden lg:flex">
            <div className="mb-12">
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-zinc-500 text-sm font-bold tracking-widest uppercase">Premium Leather</div>
            </div>
            <div className="mb-12">
              <div className="text-4xl font-black text-white mb-1">360°</div>
              <div className="text-zinc-500 text-sm font-bold tracking-widest uppercase">Enhanced Grip</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">FIBA</div>
              <div className="text-zinc-500 text-sm font-bold tracking-widest uppercase">Approved Size</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
