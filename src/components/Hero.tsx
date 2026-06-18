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
        <div className="max-w-4xl">
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
              className="text-muted-foreground text-sm font-mono mb-5"
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
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none mb-8"
          >
            Praveen Kumar TMR
          </motion.h1>

          {/* Main Intro */}
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
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
          >
            Computer Science student at IIITDM Chennai building
            backend systems, distributed infrastructure, developer
            tools, and ML-adjacent platforms.
            <br />
            <br />
            Interested in performance engineering, systems design,
            low-latency software, cloud-native architectures, and
            the intersection of machine learning and systems.
          </motion.p>

          {/* CTAs */}
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
            className="flex flex-wrap gap-4 mb-12"
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

          {/* Quick Highlights */}
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
            className="flex flex-wrap gap-3"
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
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-border/50"
          >
            <div>
              <p className="text-2xl font-semibold text-accent">
                9.8M+
              </p>
              <p className="text-sm text-muted-foreground">
                Order matches/sec
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-accent">
                2500+
              </p>
              <p className="text-sm text-muted-foreground">
                Users served
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-accent">
                99%+
              </p>
              <p className="text-sm text-muted-foreground">
                Extraction accuracy
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-accent">
                400+
              </p>
              <p className="text-sm text-muted-foreground">
                Problems solved
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
