import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import Hero from "~/components/heroSection";
import Footer from "~/components/footer";

import crypto from "crypto";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Annex Medical Clinic" },
    {
      name: "description",
      content:
        "Anonymous medical consultations and appointment booking at Annex Clinic.",
    },
  ];
}


export default function Home() {
  return (
    <main>
      {/* the NavBar */}
      <Navbar />
      {/* Hero section */}
      <Hero />
      {/* The footer */}
      <Footer />
    </main>
  );
}
