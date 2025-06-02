import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";
import avatar5 from "@/assets/avatar-5.webp";
import avatar6 from "@/assets/avatar-6.webp";
import avatar7 from "@/assets/avatar-7.webp";
import avatar8 from "@/assets/avatar-8.webp";
import avatar9 from "@/assets/avatar-9.webp";

import React, { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Productiv.ai isn't just a to-do list; it's my command center. The AI task generation saves me hours of planning each week, letting me focus on deep work.",
    image: avatar1,
    name: "Sarah Chen",
    role: "Tech Lead",
    company: "TechCorp",
    featured: true,
  },
  {
    id: 2,
    content:
      "Our team's output has genuinely doubled since adopting Productiv.ai. The AI-driven prioritization ensures we're always working on what matters most.",
    image: avatar2,
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "DevInc",
    featured: false,
  },
  {
    id: 3,
    content:
      "I finally understand where my time goes! The AI insights from Productiv.ai helped me identify bottlenecks and optimize my entire workflow. Game changer!",
    image: avatar3,
    name: "Thompson Wade",
    role: "CEO",
    company: "StartupX",
    featured: true,
  },
  {
    id: 4,
    content:
      "The AI automation features are a lifesaver. Repetitive tasks are handled seamlessly, freeing up our team for more strategic initiatives. Integration was a breeze!",
    image: avatar4,
    name: "David Kim",
    role: "Engineering Manager",
    company: "TechFlow",
    featured: false,
  },
  {
    id: 5,
    content:
      "Breaking down huge projects felt overwhelming until Productiv.ai. The AI assistant is like having a dedicated coach, guiding me through each step.",
    image: avatar5,
    name: "Rai Garcia",
    role: "Project Lead",
    company: "InnovateCo",
    featured: false,
  },
  {
    id: 6,
    content:
      "My focus has improved dramatically thanks to the smart notification system and customizable focus modes. Productiv.ai helps me stay in the zone.",
    image: avatar6,
    name: "Jami Wilson",
    role: "Developer",
    company: "CodeCraft",
    featured: false,
  },
  {
    id: 7,
    content:
      "As a startup, efficiency is key. Productiv.ai's AI-powered project management and collaboration tools have been instrumental in our rapid growth.",
    image: avatar7,
    name: "Raj Verma",
    role: "Founder",
    company: "BuildsAI",
    featured: true,
  },
  {
    id: 8,
    content:
      "The productivity analytics are incredibly insightful. We've identified key areas for improvement and seen a tangible boost in team performance.",
    image: avatar8,
    name: "Lucis Schmidt",
    role: "CTO",
    company: "LeadTech",
    featured: false,
  },
  {
    id: 9,
    content:
      "I used to dread planning my week. Now, with Productiv.ai's intelligent suggestions and automated workflows, I feel organized and in control.",
    image: avatar9,
    name: "Yo Tanaka",
    role: "Team Lead",
    company: "NinjaCode",
    featured: false,
  },
];

const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const TestimonialCardItem = ({ testimonial, index }) => {
    return (
      <div
        className={`group relative backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden
          bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-white/20 shadow-lg hover:shadow-orange-500/20 dark:hover:shadow-orange-500/25
          ${
            testimonial.featured
              ? "lg:scale-110 bg-white/90 dark:bg-white/15 border-orange-400/40 dark:border-orange-400/30 shadow-xl"
              : ""
          }`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseMove={(e) => handleMouseMove(e, testimonial.id)}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredCard === testimonial.id && (
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(251,146,60,0.3) 0%, rgba(251,146,60,0.2) 20%, rgba(251,146,60,0.1) 40%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(1px)",
              zIndex: 5,
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-70 transition-all duration-500 rounded-2xl" />

        {testimonial.featured && (
          <div className="absolute bottom-13 left-75 -translate-x-1/2 z-40">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg ">
              ⭐ Featured
            </div>
          </div>
        )}

        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-10 text-gray-600 dark:text-white">
          <Quote className="w-12 h-12" />
        </div>

        <div className="relative z-10">
          <div className="mb-8 mr-10">
            <blockquote className="leading-relaxed text-lg mb-6 transition-colors duration-300 text-gray-700 dark:text-slate-200 group-hover:text-white">
              "{testimonial.content}"
            </blockquote>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 transition-all duration-300 ring-gray-300 dark:ring-white/30 group-hover:ring-orange-400/60"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-red-500/20 group-hover:from-orange-300/30 group-hover:to-red-300/30 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg transition-colors duration-300 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-orange-100">
                {testimonial.name}
              </h3>
              <p className="text-sm transition-colors duration-300 text-gray-600 dark:text-slate-400 group-hover:text-orange-100 dark:group-hover:text-orange-200">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="min-h-screen p-8 flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-white via-white to-white dark:from-black dark:via-black dark:to-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            ❤️Loved by Productive People{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-slate-300">
            See what our customers are saying about their experience
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCardItem
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// const testimonials = [
//   {
//     text: "Productiv.ai isn't just a to-do list; it's my command center. The AI task generation saves me hours of planning each week, letting me focus on deep work.",
//     imageSrc: avatar1,
//     name: "Sarah Chen",
//     username: "@sarahtech",
//   },
//   {
//     text: "Our team's output has genuinely doubled since adopting Productiv.ai. The AI-driven prioritization ensures we're always working on what matters most.",
//     imageSrc: avatar2,
//     name: "Marcus Rodriguez",
//     username: "@marcusdev",
//   },
//   {
//     text: "I finally understand where my time goes! The AI insights from Productiv.ai helped me identify bottlenecks and optimize my entire workflow. Game changer!",
//     imageSrc: avatar3,
//     name: "Thompson Wade",
//     username: "@thopmson",
//   },
//   {
//     text: "The AI automation features are a lifesaver. Repetitive tasks are handled seamlessly, freeing up our team for more strategic initiatives. Integration was a breeze!",
//     imageSrc: avatar4,
//     name: "David Kim",
//     username: "@davidk",
//   },
//   {
//     text: "Breaking down huge projects felt overwhelming until Productiv.ai. The AI assistant is like having a dedicated coach, guiding me through each step.",
//     imageSrc: avatar5,
//     name: "Rai Garcia",
//     username: "@rai_tech",
//   },
//   {
//     text: "My focus has improved dramatically thanks to the smart notification system and customizable focus modes. Productiv.ai helps me stay in the zone.",
//     imageSrc: avatar6,
//     name: "Jami Wilson",
//     username: "@jamiswilson",
//   },
//   {
//     text: "As a startup, efficiency is key. Productiv.ai's AI-powered project management and collaboration tools have been instrumental in our rapid growth.",
//     imageSrc: avatar7,
//     name: "Raj Verma",
//     username: "@verma_builds",
//   },
//   {
//     text: "The productivity analytics are incredibly insightful. We've identified key areas for improvement and seen a tangible boost in team performance.",
//     imageSrc: avatar8,
//     name: "Lucis Schmidt",
//     username: "@lucisleads",
//   },
//   {
//     text: "I used to dread planning my week. Now, with Productiv.ai's intelligent suggestions and automated workflows, I feel organized and in control.",
//     imageSrc: avatar9,
//     name: "Yo Tanaka",
//     username: "@yotanaka",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-12 sm:py-20 px-2">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-medium text-center mb-8 sm:mb-12 -tracking-normal text-gray-900 dark:text-gray-100">
//           ❤️Loved by Productive People Worldwide 🌎
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[minmax(300px,auto)] mx-6">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`group bg-gray-100/30 dark:bg-secondary/20 backdrop-blur-sm
//                 rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-primary/30 dark:border-primary/40
//                 relative overflow-hidden
//                 ${index === 2 ? "sm:col-span-2 lg:col-span-2" : ""}
//                 ${index === 5 ? "md:col-span-1 lg:row-span-2" : ""}
//                 hover:scale-[1.02]
//                 before:absolute before:inset-0 before:opacity-0 before:transition-opacity
//                 before:duration-300 before:bg-gradient-to-br before:from-orange-100 before:via-orange-300/40 before:to-orange-600
//                 hover:before:opacity-90
//                 hover:shadow-[inset_0_0_20px_rgba(251,146,60,0.3)]
//               `}
//             >
//               {/* <div className="flex items-start h-full flex-col justify-between relative z-10">
//                 <p className="text-base sm:text-lg leading-relaxed mb-4 text-muted-foreground">
//                   {testimonial.text}
//                 </p>
//                 <div className="flex items-center gap-3 sm:gap-4">
//                   <img
//                     src={testimonial.imageSrc}
//                     alt={testimonial.name}
//                     className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-blue-400/30"
//                   />
//                   <div className="">
//                     <h3 className="font-medium text-black dark:text-white text-base sm:text-lg">
//                       {testimonial.name}
//                     </h3>
//                     <span className="text-blue-600 text-sm sm:text-base">
//                       {testimonial.username}
//                     </span>
//                   </div>
//                 </div>
//               </div> */}

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {testimonials.map((testimonial) => (
//                   <div
//                     key={testimonial.id}
//                     testimonial={testimonial}
//                     // index={index}
//                     // isDark={isDark}
//                     // mousePosition={mousePosition}
//                     // hoveredCard={hoveredCard}
//                     // onMouseMove={handleMouseMove}
//                     // onMouseLeave={handleMouseLeave}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
