import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Osharpz. ",
  description: " your partner in innovative web and mobile solutions, focused on delivering innovative solutions in web development, web applications & mobile Applications. ",
  
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <AboutSectionOne />
      <Features />
      <AboutSectionTwo />
      <Brands />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
