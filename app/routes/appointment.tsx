export default function Appointment(){
    return(
        <section
        id="book"
        className="min-h-screen flex items-center justify-center bg-violet-950 px-6 py-20 scroll-mt-16 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-64 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="text-center mb-10">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
              Step 3
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Book an Appointment
            </h2>
            <p className="text-violet-300 mt-3">
              Schedule an in-person or virtual visit. We'll confirm within 24
              hours.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="0712345678"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-violet-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-violet-200 mb-1.5">
                    Time Slot
                  </label>
                  <select className="w-full bg-violet-900 border border-white/15 rounded-xl px-4 py-3 text-violet-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                    <option>Select Time Slot</option>
                    <option>9:00 AM – 10:00 AM</option>
                    <option>10:00 AM – 11:00 AM</option>
                    <option>11:00 AM – 12:00 PM</option>
                    <option>2:00 PM – 3:00 PM</option>
                    <option>3:00 PM – 4:00 PM</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 mt-2"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    )
}