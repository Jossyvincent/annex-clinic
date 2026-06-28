import { Link } from "react-router";

export function meta() {
  return [{ title: "Doctor Dashboard — Annex Clinic" }];
}

export default function DoctorDashboard() {
  return (
    <main className="min-h-screen flex flex-col bg-violet-950 relative overflow-x-hidden">
      {/* ── Decorative blobs ─────────────────────────────────────── */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Navbar ───────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-violet-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-extrabold text-xl tracking-tight"
          >
            <span className="text-emerald-400">+</span> Annex Clinic
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-violet-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Doctor Portal
            </div>
            <Link
              to="/doctor-login"
              className="flex items-center gap-1.5 text-sm text-violet-300 hover:text-white transition-colors border border-white/15 hover:border-white/30 px-3 py-1.5 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Page Header ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-10 pb-6">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Dashboard
        </h1>
        <p className="text-violet-300 text-sm mt-1">
          Manage pending questions and upcoming appointments.
        </p>
      </div>

      {/* ── Main Grid ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* ── Pending Questions ─────────────────────────────────── */}
        <section>
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-violet-300"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white">Pending Questions</h2>
            <span className="ml-auto text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-400/20 px-2.5 py-0.5 rounded-full">
              1 pending
            </span>
          </div>

          {/* Question card */}
          <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            {/* Meta */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">
                Q-123
              </span>
              <span className="text-xs text-violet-400">Just now</span>
            </div>

            {/* Question text */}
            <p className="text-violet-100 text-sm leading-relaxed mb-5">
              I have headaches for two weeks...
            </p>

            {/* Divider */}
            <div className="border-t border-white/10 mb-5" />

            {/* Response form */}
            <div>
              <label className="block text-xs font-semibold text-violet-300 uppercase tracking-widest mb-2">
                Your Response
              </label>
              <textarea
                placeholder="Write a professional response for this patient..."
                rows={4}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-violet-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="button"
              className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-emerald-500/30"
            >
              Send Reply
            </button>
          </article>
        </section>

        {/* ── Pending Appointments ──────────────────────────────── */}
        <section>
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-300"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white">
              Pending Appointments
            </h2>
            <span className="ml-auto text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 px-2.5 py-0.5 rounded-full">
              1 pending
            </span>
          </div>

          {/* Appointment card */}
          <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            {/* Patient info grid */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
                  Name
                </p>
                <p className="text-white text-sm font-medium">John Doe</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-white text-sm font-medium">0712 345 678</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
                  Date
                </p>
                <p className="text-white text-sm font-medium">12 Aug 2025</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
                  Time
                </p>
                <p className="text-white text-sm font-medium">2:00 PM</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-5" />

            <button
              type="button"
              className="w-full bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-violet-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-violet-600/30"
            >
              Mark as Completed
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}
