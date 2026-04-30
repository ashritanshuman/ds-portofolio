"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 92 },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "Apache Spark", level: 82 },
      { name: "Kafka", level: 78 },
      { name: "Airflow", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS/GCP", level: 85 },
    ],
  },
  {
    title: "ML & AI",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "NLP", level: 88 },
      { name: "Computer Vision", level: 82 },
      { name: "Reinforcement Learning", level: 75 },
      { name: "Time Series", level: 88 },
      { name: "MLOps", level: 85 },
    ],
  },
]

const tools = [
  "Jupyter", "Git", "VS Code", "Tableau", "Power BI", "Grafana",
  "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Databricks", "Snowflake"
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{"// Technical Expertise"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of solving complex data challenges
            across various industries and domains.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.15, duration: 0.6 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated background visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 relative h-48 rounded-xl bg-card border border-border overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Neural network visualization */}
            <svg className="w-full h-full opacity-20" viewBox="0 0 800 200">
              {/* Nodes */}
              {[...Array(5)].map((_, layer) =>
                [...Array(4)].map((_, node) => (
                  <motion.circle
                    key={`${layer}-${node}`}
                    cx={100 + layer * 150}
                    cy={30 + node * 50}
                    r="8"
                    fill="oklch(0.72 0.15 185)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.3 + layer * 0.1 + node * 0.05 }}
                  />
                ))
              )}
              {/* Connections */}
              {[...Array(4)].map((_, layer) =>
                [...Array(4)].map((_, from) =>
                  [...Array(4)].map((_, to) => (
                    <motion.line
                      key={`${layer}-${from}-${to}`}
                      x1={108 + layer * 150}
                      y1={30 + from * 50}
                      x2={92 + (layer + 1) * 150}
                      y2={30 + to * 50}
                      stroke="oklch(0.72 0.15 185)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                      transition={{ delay: 1.5 + layer * 0.1, duration: 0.5 }}
                    />
                  ))
                )
              )}
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
              className="text-lg font-mono text-primary"
            >
              {"// Neural Network Architecture"}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
