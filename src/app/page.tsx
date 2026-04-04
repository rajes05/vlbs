import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Values from "@/components/Values";
import Services from "@/components/Services";
import CEOMessage from "@/components/CEOMessage";
import EMICalculator from "@/components/EMICalculator";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Values />
      <Services />
      <CEOMessage />
      <EMICalculator />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
