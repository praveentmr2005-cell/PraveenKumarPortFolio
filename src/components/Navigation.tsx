import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-foreground font-semibold hover:text-accent transition-colors">
            Praveen Kumar TMR
          </Link>
          <span className="text-muted-foreground text-sm hidden sm:inline">
            / Backend Engineer
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          
          {/* Internal navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["About", "Projects", "Experience"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link relative"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Research = routed page */}
            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link to="/research" className="nav-link">
                Research
              </Link>
            </motion.div>

            <motion.a
              href="#contact"
              className="nav-link"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>

          {/* External links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/TMR2005"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-external"
              whileHover={{ y: -1, x: 1 }}
              transition={{ duration: 0.2 }}
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/praveen-tmr/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-external"
              whileHover={{ y: -1, x: 1 }}
              transition={{ duration: 0.2 }}
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
