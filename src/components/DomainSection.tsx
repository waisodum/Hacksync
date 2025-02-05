import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, BrainCircuit } from "lucide-react"; // Ensure you have Lucide React installed
import IllustrationCard from "./IllustrationCard"; // Ensure this is correctly imported

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const DomainsSection: React.FC = () => {
  const domains = [
    {
      icon: <Sparkles className="w-full h-full" />,
      title: "Gen AI",
      description:
        "Push the boundaries of creativity with AI-powered text, image, and code generation.",
    },
    {
      icon: <BookOpen className="w-full h-full" />,
      title: "LLMs",
      description:
        "Build groundbreaking applications using cutting-edge AI-driven language models.",
    },
    {
      icon: <BrainCircuit className="w-full h-full" />,
      title: "Agentic AI",
      description:
        "Develop intelligent, autonomous agents capable of reasoning and executing complex tasks.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10 tesseract-grid">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-500">
            Domains
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Like Cooper's journey through the tesseract, explore the infinite
            possibilities of AI and ML in this 48-hour odyssey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IllustrationCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
