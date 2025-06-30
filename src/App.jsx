import React from "react";
import HeroSection from "./components/HeroSection";
import FormSection from "./components/FormSection";
import Badges from "./components/Badges";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="min-h-screen bg-[#f6ede5] text-[#1c1c1c] font-sans px-4 py-6 sm:px-6 md:px-12 lg:px-20 xl:px-40 border-4 border-blue-600 rounded-md shadow-md">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Clock />
          <HeroSection />
          <Badges />
          <FormSection />
        </div>
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <svg className="w-full max-w-[600px] h-[600px]" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <clipPath id="layeredWaveClip">
      <path d="M0,0 C200,50 400,50 600,0 L600,180 C500,220 400,240 300,250 C200,260 100,280 0,300 Z M0,600 C200,550 400,550 600,600 L600,300 C500,340 400,360 300,370 C200,380 100,400 0,420 Z" />
    </clipPath>
  </defs>
  <image
    href="/family.png"
    width="600"
    height="600"
    clipPath="url(#layeredWaveClip)"
  />
</svg>
        </div>
      </div>
    </div>
  );
}

export default App;