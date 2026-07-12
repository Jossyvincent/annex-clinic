import { Link } from "react-router";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-violet-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-extrabold text-xl tracking-tight">
          <span className="text-emerald-400">+</span> Annex Clinic
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm text-violet-200">
          <Link
            to="/ask-question"
            className="hover:text-white transition-colors"
          >
            Ask a Question
          </Link>
          <Link
            to="/check-response"
            className="hover:text-white transition-colors"
          >
            Check Response
          </Link>
          <Link
            to="/book-appointment"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-1.5 rounded-full font-medium transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
