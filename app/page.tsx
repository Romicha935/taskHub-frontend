import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/HeroSection";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
   </div>
  );
}
