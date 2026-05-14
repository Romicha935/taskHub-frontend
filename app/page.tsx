
import Navbar from "./components/shared/Navbar";
import Hero from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <DashboardPreview/>
   </div>
  );
}
