import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
return ( <section
   id="experience"
   className="py-24 border-t border-border/50"
 > <div className="container mx-auto px-6">
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
      className="max-w-3xl space-y-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* IIITDM */}

      <div className="border-l-2 border-border/50 pl-8">
        <div className="relative">
          <motion.div
            className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              type: "spring",
            }}
          />

          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">
                Software Engineering Intern
              </h3>

              <motion.a
                href="https://iiitdm.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                IIITDM Kancheepuram
                <ArrowUpRight className="w-3 h-3" />
              </motion.a>
            </div>

            <span className="text-sm font-mono text-muted-foreground glass-card px-3 py-1">
              May 2026 – Present
            </span>
          </div>

          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Leading development of a campus-wide
              Hostel Management Platform designed
              to streamline student services,
              administrative workflows, leave
              processing, hostel operations, mess
              management, complaints, and
              notifications through a unified
              digital system.
            </p>

            <p>
              Designed and implemented scalable
              backend services using Node.js,
              PostgreSQL, Redis, and Express while
              supporting role-based workflows for
              students, wardens, caretakers,
              caterers, and institutional
              administrators.
            </p>

            <p>
              Developed both web and mobile
              applications, enabling cross-platform
              access to hostel services and reducing
              manual administrative effort through
              automation, reporting dashboards, and
              approval pipelines.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 pt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            {[
              "Campus-scale platform",
              "Web + Mobile",
              "Role-based workflows",
              "PostgreSQL + Redis",
            ].map((metric, i) => (
              <motion.span
                key={metric}
                className="metric-badge"
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
                  delay: 0.4 + i * 0.1,
                }}
              >
                {metric}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* LIQUIDMIND */}

      <div className="border-l-2 border-border/50 pl-8 pb-2">
        <div className="relative">
          <motion.div
            className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              type: "spring",
            }}
          />

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
                LiquidMind.AI
                <ArrowUpRight className="w-3 h-3" />
              </motion.a>
            </div>

            <span className="text-sm font-mono text-muted-foreground glass-card px-3 py-1">
              Jun – Jul 2025
            </span>
          </div>

          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Worked on the backend architecture
              of a cloud-native document
              processing platform designed to
              ingest, extract, and validate
              structured data from complex
              enterprise PDFs at scale.
            </p>

            <p>
              Reduced end-to-end latency by
              identifying bottlenecks and
              introducing parallel task execution
              and FIFO batching, increasing
              throughput from approximately one
              document per minute to 12–16
              documents per minute under load.
            </p>

            <p>
              Integrated GPT-4 and Azure
              Document Intelligence for automated
              extraction and validation while
              implementing reliability mechanisms
              such as idempotent processing and
              state tracking for production-grade
              correctness.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 pt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            {[
              "~90% latency reduction",
              "12–16 docs/min",
              "99%+ extraction accuracy",
            ].map((metric, i) => (
              <motion.span
                key={metric}
                className="metric-badge"
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
                  delay: 0.4 + i * 0.1,
                }}
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
