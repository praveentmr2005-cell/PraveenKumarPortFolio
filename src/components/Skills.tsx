import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    systems: [
      "Backend system design",
      "Distributed task orchestration",
      "Throughput & latency optimization",
      "Fault isolation & failure handling",
      "Idempotency & exactly-once semantics"
    ],
    mlSystems: [
      "LLM integration in production systems",
      "Retrieval-Augmented Generation (RAG)",
      "Embedding-based semantic validation",
      "ML workload observability"
    ],
    implementation: [
      "C++",
      "Python",
      "JavaScript",
      "Java",
      "React",
      "Node.js",
      "Flask"
    ],
    infrastructure: [
      "Azure Functions",
      "Azure Service Bus",
      "Cosmos DB",
      "Docker",
      "MongoDB",
      "MySQL",
      "SQLite"
    ],
    tooling: [
      "Git",
      "Azure DevOps",
      "Postman",
      "CI/CD pipelines"
    ]
  };

  const services = [
    "Designing and implementing backend systems under real-world constraints",
    "Architecting distributed pipelines with clear failure semantics",
    "Optimizing performance-critical services (latency, throughput, memory)",
    "Building production-grade GenAI / RAG applications",
    "Designing cloud-native systems with operational visibility"
  ];

  const skillSections = [
    { title: "Systems & Backend Engineering", items: skills.systems },
    { title: "ML Systems & GenAI", items: skills.mlSystems },
    { title: "Implementation Stack", items: skills.implementation },
    { title: "Infrastructure & Data", items: skills.infrastructure },
    { title: "Tooling & Delivery", items: skills.tooling }
  ];

  return (
    <section id="skills" className="py-24 border-t border-border/50 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Skills & Capabilities
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Capabilities */}
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
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + sectionIndex * 0.05 + i * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8">
              What I Work On
            </h2>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <motion.li
                  key={service}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
