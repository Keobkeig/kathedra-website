"use client";
import Skills from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import Team from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <HeroSection key="hero" />
        <Skills />
        <Team/>
        <CallToAction/> 
    </div>
  );
}
