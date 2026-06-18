import { motion } from "framer-motion";

const Skills = () => {
  const skillSections = [
    {
      title: "Systems Engineering",
      items: [
        "Distributed Systems",
        "Operating Systems",
        "Performance Engineering",
        "Concurrency",
        "Low-Latency Systems",
        "Compiler Design",
        "Computer Networks",
        "Systems Design",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication & Authorization",
        "Redis",
        "Message Queues",
        "Microservices",
        "Event-Driven Architecture",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        "Docker",
        "Azure Functions",
        "Azure Service Bus",
        "Azure Container Apps",
        "Cosmos DB",
        "CI/CD",
        "Cloud-Native Systems",
        "Observability",
      ],
    },
    {
      title: "Machine Learning Systems",
      items: [
        "LLM Systems",
        "RAG",
        "Vector Databases",
        "Prompt Engineering",
        "PyTorch",
        "TensorFlow",
        "Model Evaluation",
        "ML Infrastructure",
      ],
    },
    {
      title: "Languages & Frameworks",
      items: [
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "React",
        "Flask",
        "SQL",
      ],
    },
    {
      title: "Databases & Storage",
      items: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Cosmos DB",
        "SQLite",
        "Redis",
      ],
    },
  ];

  const services = [
    "Designing scalable backend systems and APIs",
    "Building distributed systems with strong reliability guarantees",
    "Optimizing latency, throughput, and resource utilization",
    "Developing developer tools, infrastructure platforms, and cloud services",
    "Building ML-powered applications and production AI systems",
    "Designing secure systems for secrets management and access control",
    "Implementing observability, monitoring, and operational tooling",
  ];

  return (
    <section
      id="skills"
      className="py-24 border-t border-border/50 relative"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Groups */}

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {skillSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <h3 className="text-sm font-medium text-foreground mb-3">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {section.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="tech-tag"
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay:
                          0.2 +
                          sectionIndex * 0.05 +
                          i * 0.03,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Expertise */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h2 className="text-2xl font-semibold mb-8">
              What I Build
            </h2>

            <ul className="space-y-4">
              {services.map((service, i) => (
                <motion.li
                  key={service}
                  className="flex items-start gap-3 group"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />

                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 glass-card p-6">
              <h3 className="font-semibold mb-3">
                Current Focus
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Exploring large-scale backend systems,
                distributed infrastructure,
                low-latency software,
                developer tooling,
                ML systems, and cloud-native
                architectures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
