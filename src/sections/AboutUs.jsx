"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "../components/ui/";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";

// Removed AboutUsProps interface

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues = [
  // Removed explicit typing AboutUsProps["values"]
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new possibilities to create cutting-edge solutions.",
    icon: "Lightbulb", // This string key will be used to look up the component in iconComponents
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.",
    icon: "Users",
  },
  {
    title: "Excellence",
    description:
      "We strive for perfection in everything we do, consistently delivering high-quality work.",
    icon: "Sparkles",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the positive difference we make in people's lives and businesses.",
    icon: "Globe",
  },
];

export default function AboutUs1() {
  // Props can still be passed and destructured if needed, e.g., function AboutUs1(props)
  const aboutData = {
    title: "About Us",
    subtitle: "Empowering Productivity Through Intelligent Solutions.", // Updated subtitle
    mission:
      "Our mission is to empower individuals and teams to achieve their full potential by providing intuitive and intelligent productivity tools that streamline workflows and enhance focus.", // Updated mission
    vision:
      "We envision a world where everyone can effortlessly manage their tasks, optimize their time, and achieve their goals with clarity and purpose.", // Updated vision
    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden pt-20 w-full">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mb-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group block relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br backdrop-blur-3xl border border-border/40"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />

              <div className="mb-6 inline-flex flex-1 h-16 aspect-square w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group block relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br backdrop-blur-3xl border border-border/40"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={
                      IconComponent ? (
                        <IconComponent className="h-6 w-6" />
                      ) : null
                    } // Added a check for IconComponent
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                        ? "blue"
                        : index === 2
                        ? "amber"
                        : "rose"
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
