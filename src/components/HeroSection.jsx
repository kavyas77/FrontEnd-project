import React from "react";

const HeroSection = () => {
  return (
    <section className="text-left">
      <div className="flex gap-2 mb-3 items-center">
        <div className="h-1 w-6 bg-blue-600 rounded" />
        <div className="h-1 w-6 bg-gray-300 rounded" />
        <div className="h-1 w-6 bg-gray-300 rounded" />
        <div className="h-1 w-6 bg-gray-300 rounded" />
        <div className="h-1 w-6 bg-gray-300 rounded" />
        <span className="ml-2 text-sm text-gray-500">2 of 5</span>
      </div>
      <h1 className="text-2xl md:text-4xl font-extrabold mb-3">
        Have you or a loved one been affected by Mesothelioma?
      </h1>
      <p className="text-md md:text-lg text-gray-700 max-w-xl mb-2">
        As a woman, you've carried the weight of care, love, and resilience. Now it’s time someone stands with you.
      </p>
      <hr className="border-t border-gray-300 mb-4" />
      <h2 className="text-lg font-bold mb-2">Start your free case review now!</h2>
    </section>
  );
};

export default HeroSection;