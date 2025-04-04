"use client";
import Script from 'next/script';

export default function RobotArm() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js" 
        strategy="beforeInteractive"
      />
      <spline-viewer 
        url="https://prod.spline.design/1TKQs0qFXZ8l8dRH/scene.splinecode"
        className="w-full h-[calc(100%+60px)] -mb-[60px]"
        background="#ffffff"
        camera-orbit="-30deg 60deg 6m"
        camera-target="0 1 0"
        camera-zoom="1.5"
      />
    </div>
  );
}