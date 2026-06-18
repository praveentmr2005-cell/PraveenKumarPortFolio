import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 border-t border-border/50 relative"
    >
      {/* Background gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Narrative */}

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
              delay: 0.1,
            }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Building reliable systems at the
              intersection of infrastructure,
              performance, and developer tooling.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Computer Science student
              pursuing a dual degree (B.Tech +
              M.Tech) at IIITDM Chennai. My
              interests lie in backend
              engineering, distributed systems,
              operating systems, and
              performance-critical software.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I enjoy building systems where
              correctness, scalability, and
              operational reliability matter.
              My work spans low-latency trading
              infrastructure, collaborative
              distributed applications, secure
              developer tooling, compiler
              construction, and large-scale
              administrative platforms used by
              thousands of users.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently, I am focused on
              understanding how modern software
              systems behave under real-world
              constraints—whether that involves
              concurrency, distributed
              coordination, memory efficiency,
              fault tolerance, or developer
              productivity.
            </p>
          </motion.div>

          {/* Education + Interests */}

          <motion.div
            className="space-y-8"
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
            {/* Education */}

            <div className="glass-card p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Education
              </h3>

              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">
                  B.Tech + M.Tech,
                  Computer Science and
                  Engineering
                </p>

                <p>
                  Indian Institute of
                  Information Technology,
                  Design and Manufacturing
                </p>

                <p className="text-sm font-mono mt-1">
                  2023 – 2028 | Chennai,
                  India
                </p>

                <p className="text-sm font-mono text-accent">
                  8.88 / 10 CGPA
                </p>
              </div>
            </div>

            {/* Academic Focus */}

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Academic Focus
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Distributed Systems",
                  "Operating Systems",
                  "Performance Engineering",
                  "Compilers",
                  "Computer Networks",
                  "Database Systems",
                  "Systems Design",
                  "Machine Learning Systems",
                ].map((item, i) => (
                  <motion.span
                    key={item}
                    className="tech-tag"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay:
                        0.3 + i * 0.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Interests */}

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Areas of Interest
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                I am particularly interested in
                backend infrastructure,
                distributed systems,
                performance engineering,
                developer tools, cloud-native
                platforms, and ML systems. I
                enjoy designing software that
                remains simple to reason about
                while operating reliably at
                scale.
              </p>
            </div>

            {/* Quick Stats */}

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <p className="text-2xl font-semibold text-accent">
                  2500+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Users served through
                  production software
                </p>
              </div>

              <div className="glass-card p-4">
                <p className="text-2xl font-semibold text-accent">
                  400+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Competitive programming
                  problems solved
                </p>
              </div>

              <div className="glass-card p-4">
                <p className="text-2xl font-semibold text-accent">
                  9.8M
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Orders/sec trading engine
                  throughput
                </p>
              </div>

              <div className="glass-card p-4">
                <p className="text-2xl font-semibold text-accent">
                  99%+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Extraction accuracy in
                  production pipelines
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
