import React from "react";

const badges = [
  { text: "Free Case Evaluation", color: "bg-purple-100", dot: "bg-purple-700" },
  { text: "No Win, No Fee", color: "bg-blue-100", dot: "bg-blue-700" },
  { text: "100% Confidential", color: "bg-yellow-100", dot: "bg-yellow-700" },
];

const Badges = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 px-3 py-1 rounded-full ${badge.color}`}
        >
          <span className={`w-3 h-3 rounded-full ${badge.dot}`}></span>
          <span className="text-sm font-medium text-gray-800">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Badges;