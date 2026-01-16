import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border/50 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Systems-focused engineer with a bias for correctness and performance.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I am an undergraduate Computer Science student pursuing a dual
              degree (B.Tech + M.Tech) at IIITDM Chennai, graduating in 2028. My
              work centers on backend systems, distributed architectures, and
              performance-sensitive software where trade-offs are explicit and
              measurable.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am particularly interested in understanding systems from first
              principles—how data structures, memory layout, scheduling, and
              failure semantics interact in real-world workloads—and applying
              that understanding to both infrastructure and ML-adjacent systems.
            </p>
          </motion.div>

          {/* Grounding & context */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Education
              </h3>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">
                  B.Tech + M.Tech, Computer Science and Engineering
                </p>
                <p>
                  Indian Institute of Information Technology, Design and
                  Manufacturing
                </p>
                <p className="text-sm font-mono mt-1">
                  2023 – 2028 | Chennai, India
                </p>
                <p className="text-sm font-mono text-accent">
                  8.83 / 10 CGPA (current)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Academic Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Operating Systems", "Compilers", "Algorithms", "Distributed Systems", "Computer Architecture", "Databases", "Machine Learning Systems"].map((item, i) => (
                  <motion.span
                    key={item}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Orientation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I gravitate toward problems that require reasoning about
                performance, correctness, and scalability under constraints,
                and I prefer designs that are simple to reason about even when
                they are harder to implement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
