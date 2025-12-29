import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppDownload from "@/components/AppDownload";
import WhyUs from "@/components/WhyUs";
import HowToGet from "@/components/HowToGet";
import Repayment from "@/components/Repayment";
import Safety from "@/components/Safety";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AppDownload />
      <WhyUs />
      <HowToGet />
      <Repayment />
      <Safety />
      <FAQ />
      <Footer />
    </main>
  );
}
