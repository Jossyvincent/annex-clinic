export default function Footer(){
    return(
        <footer className="bg-gray-950 text-gray-400 px-6 py-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-gray-300">⚠ Disclaimer:</span>{" "}
            This platform does not provide emergency medical services. If you
            are experiencing a medical emergency, please contact emergency
            services immediately. Responses from our doctors are for
            informational purposes only and do not constitute a formal medical
            diagnosis.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Annex Medical Clinic. All rights
            reserved.
          </p>
        </div>
      </footer>
    )
}