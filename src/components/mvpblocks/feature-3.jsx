import { ListChecks, Timer, Target, Users, Zap, BarChart3 } from "lucide-react"; // Updated icons
import { cn } from "@/lib/utils";

// Updated feature data arrays for Productiv.ai
const leftFeatures = [
  {
    icon: ListChecks,
    title: "AI Task Management",
    description:
      "Effortlessly organize, prioritize, and delegate tasks with our smart AI assistant.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Timer,
    title: "Intelligent Time Tracking",
    description:
      "Gain insights into your work patterns with automated time logging and detailed project reports.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Target,
    title: "Focus & Deep Work",
    description:
      "Minimize distractions and enhance concentration with customizable focus sessions and ambient sounds.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures = [
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Work together effortlessly with shared workspaces, real-time updates, and integrated communication.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline your processes to save time and boost efficiency.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: BarChart3,
    title: "Productivity Analytics",
    description:
      "Track progress, understand habits, and unlock new levels of performance with actionable insights.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

// Feature card component (remains the same structurally)
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pb-4 pt-4 text-sm",
          "bg-secondary/50 ring ring-border",
          feature.cornerStyle
        )}
      >
        <div className="mb-3 text-[2rem] text-primary">
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl text-foreground">{feature.title}</h2>
        <p className="text-pretty text-base text-muted-foreground">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section className="pb-8 pt-20" id="features">
      <div className="mx-6 max-w-[1120px] pb-16 pt-2 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column - Updated Title and Description */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="mb-4.5 relative mx-auto w-fit rounded-full rounded-bl-[2px] bg-secondary px-4 py-2 text-sm text-foreground ring ring-border">
              <span className="z-1 relative flex items-center gap-2">
                Features
              </span>
              <span className="absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="mb-2 text-center text-2xl text-foreground sm:mb-2.5 md:text-[2rem]">
              Unlock Peak Productivity
            </h2>
            <p className="mx-auto max-w-[24rem] text-pretty text-center text-muted-foreground">
              Productiv.ai offers a suite of intelligent tools designed to
              streamline your workflow, enhance focus, and maximize your output.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
