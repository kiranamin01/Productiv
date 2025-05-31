import React from "react";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";
import avatar5 from "@/assets/avatar-5.webp";
import avatar6 from "@/assets/avatar-6.webp";
import avatar7 from "@/assets/avatar-7.webp";
import avatar8 from "@/assets/avatar-8.webp";
import avatar9 from "@/assets/avatar-9.webp";

const testimonials = [
  {
    text: "Productiv.ai isn't just a to-do list; it's my command center. The AI task generation saves me hours of planning each week, letting me focus on deep work.",
    imageSrc: avatar1,
    name: "Sarah Chen",
    username: "@sarahtech",
  },
  {
    text: "Our team's output has genuinely doubled since adopting Productiv.ai. The AI-driven prioritization ensures we're always working on what matters most.",
    imageSrc: avatar2,
    name: "Marcus Rodriguez",
    username: "@marcusdev",
  },
  {
    text: "I finally understand where my time goes! The AI insights from Productiv.ai helped me identify bottlenecks and optimize my entire workflow. Game changer!",
    imageSrc: avatar3,
    name: "Thompson Wade",
    username: "@thopmson",
  },
  {
    text: "The AI automation features are a lifesaver. Repetitive tasks are handled seamlessly, freeing up our team for more strategic initiatives. Integration was a breeze!",
    imageSrc: avatar4,
    name: "David Kim",
    username: "@davidk",
  },
  {
    text: "Breaking down huge projects felt overwhelming until Productiv.ai. The AI assistant is like having a dedicated coach, guiding me through each step.",
    imageSrc: avatar5,
    name: "Rai Garcia",
    username: "@rai_tech",
  },
  {
    text: "My focus has improved dramatically thanks to the smart notification system and customizable focus modes. Productiv.ai helps me stay in the zone.",
    imageSrc: avatar6,
    name: "Jami Wilson",
    username: "@jamiswilson",
  },
  {
    text: "As a startup, efficiency is key. Productiv.ai's AI-powered project management and collaboration tools have been instrumental in our rapid growth.",
    imageSrc: avatar7,
    name: "Raj Verma",
    username: "@verma_builds",
  },
  {
    text: "The productivity analytics are incredibly insightful. We've identified key areas for improvement and seen a tangible boost in team performance.",
    imageSrc: avatar8,
    name: "Lucis Schmidt",
    username: "@lucisleads",
  },
  {
    text: "I used to dread planning my week. Now, with Productiv.ai's intelligent suggestions and automated workflows, I feel organized and in control.",
    imageSrc: avatar9,
    name: "Yo Tanaka",
    username: "@yotanaka",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-20 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium text-center mb-8 sm:mb-12 -tracking-normal text-gray-900 dark:text-gray-100">
          ❤️Loved by Productive People Worldwide 🌎
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[minmax(300px,auto)] mx-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-gray-100/30 dark:bg-secondary/20 backdrop-blur-sm
                rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-primary/30 dark:border-primary/40
                relative overflow-hidden
                ${index === 2 ? "sm:col-span-2 lg:col-span-2" : ""}
                ${index === 5 ? "md:col-span-1 lg:row-span-2" : ""}
                hover:scale-[1.02]
                before:absolute before:inset-0 before:opacity-0 before:transition-opacity
                before:duration-300 before:bg-gradient-to-br before:from-orange-100 before:via-orange-300/40 before:to-orange-600
                hover:before:opacity-90
                hover:shadow-[inset_0_0_20px_rgba(251,146,60,0.3)]
              `}
            >
              <div className="flex items-start h-full flex-col justify-between relative z-10">
                <p className="text-base sm:text-lg leading-relaxed mb-4 text-muted-foreground">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-blue-400/30"
                  />
                  <div className="">
                    <h3 className="font-medium text-black dark:text-white text-base sm:text-lg">
                      {testimonial.name}
                    </h3>
                    <span className="text-blue-600 text-sm sm:text-base">
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
