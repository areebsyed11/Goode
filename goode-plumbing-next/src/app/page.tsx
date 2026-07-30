import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuickActions from "@/components/QuickActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ProcessTimeline />
        <About />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <QuickActions />
    </>
  );
}
