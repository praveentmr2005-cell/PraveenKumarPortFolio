import { ArrowUpRight, Mail, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "tmrpraveen2005@gmail.com",
      href: "mailto:tmrpraveen2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7449198916",
      href: "tel:+917449198916"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/TMR2005",
      href: "https://github.com/TMR2005",
      external: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/praveen-tmr",
      href: "https://www.linkedin.com/in/praveen-tmr/",
      external: true
    }
  ];

  return (
    <section id="contact" className="py-24 border-t border-border/50 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>
        
        <div className="max-w-2xl">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss your backend challenges.
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Open to internship opportunities, collaborations on distributed systems projects, and consulting on performance-critical applications.
          </motion.p>
          
          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 glass-card hover:border-accent/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 4, scale: 1.01 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/30 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
