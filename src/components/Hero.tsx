import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TAGLINES = [
  "Backend Systems • Distributed Infrastructure • ML Systems",
  "Building software where latency, correctness, and scale matter",
  "Systems Engineer focused on performance-critical infrastructure",
];

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY < height * 0.05) {
        setTaglineIndex(0);
      } else if (scrollY < height * 0.17) {
        setTaglineIndex(1);
      } else {
        setTaglineIndex(2);
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -right-1/4 w-[650px] h-[650px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[450px] h-[450px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Dynamic Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <p
              key={taglineIndex}
              className="text-muted-foreground text-sm font-mono mb-4"
            >
              {TAGLINES[taglineIndex]}
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
          >
            Praveen Kumar TMR
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
          >
            Computer Science student at IIITDM Chennai focused on
            backend engineering, distributed systems, and
            performance-critical software.
            <br />
            <br />
            Interested in systems design, low-latency
            infrastructure, cloud-native platforms,
            developer tooling, and ML systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#experience"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Experience
            </motion.a>
          </motion.div>

          {/* Technical Focus */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="flex flex-wrap gap-2"
          >
            {[
              "Distributed Systems",
              "Performance Engineering",
              "Low-Latency Infrastructure",
              "Backend Development",
              "ML Systems",
              "Cloud-Native Platforms",
            ].map((tag, i) => (
              <motion.span
                key={tag}
                className="tech-tag"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + i * 0.05,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            className="flex flex-wrap gap-6 mt-10 pt-6 border-t border-border/50"
          >
            <div>
              <p className="text-xl font-semibold text-accent">
                9.8M+
              </p>
              <p className="text-xs text-muted-foreground">
                ops/sec
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-accent">
                2500+
              </p>
              <p className="text-xs text-muted-foreground">
                users served
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-accent">
                99%+
              </p>
              <p className="text-xs text-muted-foreground">
                extraction accuracy
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-accent">
                400+
              </p>
              <p className="text-xs text-muted-foreground">
                problems solved
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
