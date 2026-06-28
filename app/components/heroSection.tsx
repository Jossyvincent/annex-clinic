export default function Hero(){
    return(
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-violet-950 via-violet-900 to-indigo-900 px-6 pt-16">
        {/* Decorative glowing blobs */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-violet-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-175 h-175 bg-violet-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Secure &amp; Confidential Consultations
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Anonymous Medical
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-violet-300">
              Consultation
            </span>
            <span className="text-white"> at Annex</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-violet-200 max-w-2xl mx-auto leading-relaxed">
            Ask medical questions anonymously and receive professional feedback
            from certified doctors — no sign-up, no identity required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#ask"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-9 py-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40"
            >
              Ask a Question
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold text-lg px-9 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-violet-300 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-2xl">100%</span>
              Anonymous
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-2xl">24h</span>
              Response Time
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-2xl">5+</span>
              Certified Doctors
            </div>
          </div>
        </div>
      </section>
    )
}