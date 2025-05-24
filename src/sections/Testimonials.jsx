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
    <section id="testimonials" className="py-20 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-center mb-12 -tracking-normal text-gray-900 dark:text-gray-100">
          ❤️Loved by Productive People Worldwide 🌎
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-100/30 dark:bg-secondary/20 backdrop-blur-sm
                rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/30 dark:border-primary/40
                ${index === 2 ? "md:col-span-2 lg:col-span-2" : ""}
                ${
                  index === 3 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }
                ${index === 5 ? "md:col-span-1 lg:row-span-2" : ""}
                
                hover:scale-[1.02]
              `}
            >
              <div className="flex items-start h-full flex-col justify-between">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-400/30"
                  />
                  <div className="">
                    <h3 className="font-medium text-black dark:text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <span className="text-blue-600 text-base">
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
