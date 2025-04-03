"use client";
import { Experience } from "@/components/experience";
import Skills from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import { Education } from "@/components/education";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import RobotArm from "@/components/robot-arm";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
        {/* <RobotArm/> */}
        <HeroSection />
        <Skills />
        {/* <Experience />
        {/* <Education/>  */}
        {/* <RobotArm /> */}
        <Testimonials/>
        <CallToAction/> 

    </div>
  );
}
