import {
  Zap, // Changed from Code
  Users, // Changed from Terminal
  Heart, // Changed from Paintbrush
  Gift, // Changed from Rocket
  BookOpen, // Changed from Book
  Github, // Changed from PlusCircle
} from "lucide-react";

const features = [
  {
    icon: <Gift className="h-6 w-6" />,
    title: "Free to Start",
    desc: "Get started with core productivity features absolutely free. Upgrade only when you need more power.",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "Open Source Spirit",
    desc: "Built with transparency and community in mind. Contribute and help shape the future of productivity.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered Efficiency",
    desc: "Leverage intelligent suggestions and automation to streamline your tasks and save valuable time.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborate Seamlessly",
    desc: "Work together with your team in shared workspaces, with real-time updates and communication.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "User-Centric Design",
    desc: "An intuitive and beautiful interface designed to enhance focus and make productivity enjoyable.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Comprehensive Guides",
    desc: "Access detailed documentation and tutorials to get the most out of Productiv.ai's features.",
  },
];
export default function Feature1() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Unlock Your Productivity Potential
            </h3>
            <p className="font-geist mt-3 text-foreground/60">
              Productiv.ai offers a suite of powerful tools designed to help you
              manage tasks, collaborate effectively, and achieve your goals.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="mx-auto mt-5 h-px w-1/2 bg-foreground/30" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="w-fit transform-gpu rounded-full border p-4 text-primary [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
