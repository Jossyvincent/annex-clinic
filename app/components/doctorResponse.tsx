export default function Response(){
    return(
        <section
        id="check"
        className="min-h-screen flex items-center justify-center bg-white px-6 py-20 scroll-mt-16"
      >
        <div className="w-full max-w-2xl text-center">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            Step 2
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Check Doctor Response
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Paste the secure link you received after submitting your question to
            view your doctor's reply.
          </p>

          <div className="mt-10 bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-600"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">
                Your link is encrypted and expires after viewing
              </span>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Paste your secure response link here..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-md shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Check Response
              </button>
            </form>
          </div>
        </div>
      </section>
    )
}