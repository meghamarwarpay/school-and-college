import GideHero from "@/Components/arrangement/GideHero";
import Features from "@/Components/FeaturedPrograms/Features";
import AboutUs from "@/Components/Homepage/About/AboutUs";
import Empouring from "@/Components/Homepage/About/Empouring";
import Hero from "@/Components/Homepage/Hero/Hero";
import News from "@/Components/Homepage/news/news";
import WhyChooseUs from "@/Components/LayoutDesigns/WhyChooseUs/WhyChooseUs";
import Marquee from "@/Components/Marques/Marquee";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <News />
      <AboutUs />
      <Empouring />
      <WhyChooseUs />
      <GideHero />
      <Features />
    </div>
  );
}
