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
    text: "Productiv.ai isn't just a to-do list; it's my command center. The AI task generation saves me hours of planning each week, letting me focus on deep work.",
    imageSrc: avatar1,
    name: "Priya Sharma",
    username: "@priyatech",
  },
  {
    text: "Our team's output has genuinely doubled since adopting Productiv.ai. The AI-driven prioritization ensures we're always working on what matters most.",
    imageSrc: avatar2,
    name: "Arjun Patel",
    username: "@arjunp_dev",
  },
  {
    text: "I finally understand where my time goes! The AI insights from Productiv.ai helped me identify bottlenecks and optimize my entire workflow. Game changer!",
    imageSrc: avatar3,
    name: "Neha Verma",
    username: "@nehav_pm",
  },
  {
    text: "The AI automation features are a lifesaver. Repetitive tasks are handled seamlessly, freeing up our team for more strategic initiatives. Integration was a breeze!",
    imageSrc: avatar4,
    name: "Rajesh Kumar",
    username: "@rajeshk",
  },
  {
    text: "Breaking down huge projects felt overwhelming until Productiv.ai. The AI assistant is like having a dedicated coach, guiding me through each step.",
    imageSrc: avatar5,
    name: "Ananya Mehta",
    username: "@ananyam_tech",
  },
  {
    text: "My focus has improved dramatically thanks to the smart notification system and customizable focus modes. Productiv.ai helps me stay in the zone.",
    imageSrc: avatar6,
    name: "Vikram Singh",
    username: "@vikramsingh",
  },
  {
    text: "As a startup, efficiency is key. Productiv.ai's AI-powered project management and collaboration tools have been instrumental in our rapid growth.",
    imageSrc: avatar7,
    name: "Kavita Reddy",
    username: "@kavita_builds",
  },
  {
    text: "The productivity analytics are incredibly insightful. We've identified key areas for improvement and seen a tangible boost in team performance.",
    imageSrc: avatar8,
    name: "Arun Gupta",
    username: "@arungtechleads",
  },
  {
    text: "I used to dread planning my week. Now, with Productiv.ai's intelligent suggestions and automated workflows, I feel organized and in control.",
    imageSrc: avatar9,
    name: "Meera Iyer",
    username: "@meeraiyer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-black to-indigo-900 dark:from-gray-100 dark:to-gray-500">
          Loved by Productive People Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-blue-900 to-purple-900 backdrop-blur-sm
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
