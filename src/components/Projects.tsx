import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const secondaryProjects = [
    {
      title: "Real-Time Collaborative Code Platform",
      subtitle: "CRDT-based multi-user editor",
      description: "Explored conflict-free synchronization using CRDTs, separating real-time collaboration paths from persistence and execution via Redis-backed queues.",
      liveUrl: "https://collaborativecoder.vercel.app/",
      sourceUrl: "https://github.com/TMR2005/CollaborativeCoder"
    },
    {
      title: "MLinux – ML-Aware Linux Telemetry",
      subtitle: "GPU observability & optimization",
      description: "Built a system-level telemetry daemon around NVIDIA NVML to surface GPU utilization, memory pressure, and starvation patterns in ML workloads.",
      sourceUrl: "https://github.com/TMR2005/Mlinux"
    },
    {
      title: "LANCast",
      subtitle: "Offline LAN audio/video conferencing",
      description: "Implemented a LAN-only conferencing system using TCP for control and UDP for low-latency media streaming under bandwidth constraints.",
      sourceUrl: "https://github.com/TMR2005/LAN-Based-Conference-Application-for-Windows"
    },
    {
      title: "AI-Augmented Compiler for MiniC",
      subtitle: "Compiler pipeline with MIPS backend",
      description: "Built a full compiler pipeline and explored LLM-assisted IR rewriting triggered by liveness-based register pressure analysis, with semantic verification to preserve correctness.",
      sourceUrl: "https://github.com/TMR2005/AI-Augumented-Smart-Compiler"
    }
  ];

  return (
    <section id="projects" className="py-28 border-t border-border/50 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.p
          className="section-heading mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Selected Systems
        </motion.p>

        {/* Flagship Case Study */}
        <motion.div
          className="project-card mb-24 glow-accent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="p-10 md:p-14">
            <div className="flex items-start justify-between mb-6">
              <div>
                <motion.span
                  className="metric-badge mb-4 inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Flagship case study
                </motion.span>

                <h3 className="text-3xl md:text-4xl font-semibold mb-3">
                  Low-Latency Limit Order Book
                </h3>

                <p className="text-muted-foreground max-w-2xl">
                  A single-threaded matching engine built to study how
                  data-structure choice, allocator behavior, and cache locality
                  affect latency in exchange-style systems.
                </p>
              </div>

              <motion.a
                href="https://github.com/TMR2005/Limit-Order-Book"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-lg"
                aria-label="GitHub repository"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {["9.8M ops/sec", "~101 ns/op avg", "~30% faster than std::map"].map((metric, i) => (
                <span key={metric} className="metric-badge">{metric}</span>
              ))}
            </motion.div>

            <div className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
              <p>
                The system intentionally avoids concurrency to eliminate
                synchronization overhead from the hot path, making performance
                costs attributable to memory layout and allocation behavior.
                Tree-based price levels were replaced with array-indexed levels
                and intrusive FIFO lists to remove pointer chasing and heap
                allocation during order matching.
              </p>
            </div>

            <motion.a
              href="/projects/limit-order-book"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline group"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Read the full design write-up
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Supporting Work */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground font-mono mb-4">
                {project.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline text-accent"
                  >
                    Live demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors"
                >
                  {project.liveUrl ? "Source" : "View project"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
