import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";

const testimonials = [
  {
    text: "Productiv.ai has revolutionized how I manage my daily tasks. The AI-powered features help me stay focused and accomplish more in less time.",
    imageSrc: avatar1,
    name: "Priya Sharma",
    username: "@priyatech",
  },
  {
    text: "The smart task prioritization and AI suggestions have doubled our team's productivity. This is exactly what we needed!",
    imageSrc: avatar2,
    name: "Arjun Patel",
    username: "@arjunp_dev",
  },
  {
    text: "The AI-driven insights help me understand my productivity patterns and optimize my work schedule effectively.",
    imageSrc: avatar3,
    name: "Neha Verma",
    username: "@nehav_pm",
  },
  {
    text: "The seamless integration with our existing tools and AI-powered automation has made our workflow incredibly efficient.",
    imageSrc: avatar4,
    name: "Rajesh Kumar",
    username: "@rajeshk",
  },
  {
    text: "The AI assistant helps me break down complex projects into manageable tasks. It's like having a personal productivity coach!",
    imageSrc: avatar5,
    name: "Ananya Mehta",
    username: "@ananyam_tech",
  },
  {
    text: "The smart notification system and focus mode features have helped me eliminate distractions and maintain peak productivity.",
    imageSrc: avatar6,
    name: "Vikram Singh",
    username: "@vikramsingh",
  },
  {
    text: "Our startup's efficiency has improved dramatically with Productiv.ai's AI-powered project management and team collaboration features.",
    imageSrc: avatar7,
    name: "Kavita Reddy",
    username: "@kavita_builds",
  },
  {
    text: "The AI-powered time tracking and productivity analytics give us valuable insights into our team's performance and areas for improvement.",
    imageSrc: avatar8,
    name: "Arun Gupta",
    username: "@arungtechleads",
  },
  {
    text: "The intelligent task suggestions and automated workflow features have transformed how I manage my daily responsibilities.",
    imageSrc: avatar9,
    name: "Meera Iyer",
    username: "@meeraiyer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-800 via-blue-950 to-black/95 backdrop-blur-sm
                rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-700/20
                ${
                  index === 3 || index === 7
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }
                ${index === 4 ? "md:row-span-2 md:col-span-1" : ""}
                hover:scale-[1.02]
              `}
            >
              <div className="flex items-start h-full flex-col justify-between">
                <p className="text-gray-200 text-xl leading-relaxed mb-4 ">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-400/30"
                  />
                  <div>
                    <h3 className="font-medium text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <span className="text-blue-200/80 text-base">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
