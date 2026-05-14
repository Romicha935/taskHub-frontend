
import Navbar from "./components/shared/Navbar";
import Hero from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";
import CTA from "./components/CTA";
import Footer from "./components/shared/Footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <DashboardPreview/>
    <CTA/>
    <Footer/>
   </div>
  );
}
