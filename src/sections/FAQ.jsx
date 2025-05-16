import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group rounded-lg border border-border/60",
        "transition-all duration-200 ease-in-out",
        isOpen ? "bg-card/30 shadow-sm" : "hover:bg-card/50"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-foreground/80",
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-t border-border/40 px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What is Productiv.ai?",
      answer:
        "Productiv.ai is an AI-powered productivity platform that helps you manage tasks, optimize workflows, and enhance focus. Our intelligent features adapt to your work style to maximize efficiency.",
    },
    {
      question: "How does the AI task prioritization work?",
      answer:
        "Our AI analyzes your work patterns, deadlines, and task importance to suggest optimal task ordering. It learns from your preferences and productivity peaks to create personalized recommendations.",
    },
    {
      question: "Is my data secure with Productiv.ai?",
      answer:
        "Yes, we take data security seriously. All data is encrypted, and we follow industry-best security practices. Your information is never shared with third parties without your explicit consent.",
    },
    {
      question: "Can I integrate Productiv.ai with other tools?",
      answer:
        "Absolutely! Productiv.ai seamlessly integrates with popular productivity tools and project management platforms. Our API allows for custom integrations to fit your workflow.",
    },
    {
      question: "Is there a free version available?",
      answer:
        "Yes! We offer a feature-rich free tier that includes essential productivity tools. Premium features are available through our paid plans, with special pricing for teams and enterprises.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute -left-20 top-20 h-68 w-68 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-68 w-68 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider"
          >
            FAQs
          </Badge>

          <h2 className="mb-3 bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-3xl font-bold text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to know about Productiv.ai
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
