"use client";
import { Experience } from "@/components/experience";
import Skills from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import { Problem } from "@/components/education";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import { Companies } from "@/components/companies";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
        <HeroSection />
        <Problem/>
        <Skills />
        {/* {/* <Experience /> */}
        <Companies/> 
        <Testimonials/>
        <CallToAction/> 

    </div>
  );
}
