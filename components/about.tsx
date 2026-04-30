"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, LineChart, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building predictive models and neural networks for complex problem-solving",
  },
  {
    icon: Database,
    title: "Big Data",
    description: "Processing and analyzing large-scale datasets with distributed systems",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description: "Creating compelling visual narratives from complex data insights",
  },
  {
    icon: Sparkles,
    title: "AI Research",
    description: "Exploring cutting-edge techniques in deep learning and NLP",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              {"// About Me"}
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Turning Data into{" "}
              <span className="text-primary">Decisions</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                With over 5 years of experience in data science and machine learning, 
                I specialize in extracting meaningful insights from complex datasets 
                and building intelligent systems that drive business value.
              </p>
              <p>
                My journey began with a Ph.D. in Computer Science from Stanford, 
                where I focused on deep learning architectures for natural language 
                processing. Since then, I&apos;ve worked with Fortune 500 companies 
                and innovative startups alike.
              </p>
              <p>
                Currently, I&apos;m passionate about responsible AI development, 
                ensuring that the systems we build are not only powerful but also 
                fair, interpretable, and beneficial to society.
              </p>
            </motion.div>
          </div>

          {/* Right content - Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "15+", label: "Publications" },
            { value: "5+", label: "Years Experience" },
            { value: "10M+", label: "Data Points Analyzed" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
