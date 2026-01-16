import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.p
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.p>

        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="border-l-2 border-border/50 pl-8 pb-2">
            <div className="relative">
              {/* Timeline marker */}
              <motion.div
                className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Product Engineering Intern
                  </h3>
                  <motion.a
                    href="https://liquidmind.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-1"
                    whileHover={{ x: 2 }}
                  >
                    LiquidMind.AI <ArrowUpRight className="w-3 h-3" />
                  </motion.a>
                </div>
                <span className="text-sm font-mono text-muted-foreground glass-card px-3 py-1">
                  Jun – Jul 2025
                </span>
              </div>

              {/* Narrative */}
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Worked on the backend architecture of a cloud-native document
                  processing platform designed to ingest, extract, and validate
                  structured data from complex enterprise PDFs at scale. The
                  system was decomposed into independently deployable services
                  to improve throughput, fault isolation, and operational
                  visibility.
                </p>

                <p>
                  A primary focus was reducing end-to-end latency by identifying
                  blocking stages in the pipeline and introducing parallel task
                  execution and FIFO batching. This shift increased sustained
                  throughput from roughly one document per minute to 12–16
                  documents per minute under load.
                </p>

                <p>
                  Integrated LLM-based extraction and validation using GPT-4 and
                  Azure Document Intelligence, with an embedding-driven semantic
                  validation layer to resolve ambiguous or inconsistent fields.
                  Special attention was paid to correctness guarantees,
                  implementing idempotent writes and state tracking to ensure
                  exactly-once processing semantics.
                </p>
              </div>

              {/* Evidence */}
              <motion.div
                className="flex flex-wrap gap-2 pt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {["~90% latency reduction", "12–16 docs/min sustained", "99%+ extraction accuracy"].map((metric, i) => (
                  <motion.span
                    key={metric}
                    className="metric-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    {metric}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
