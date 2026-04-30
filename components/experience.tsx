"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, GraduationCap, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    type: "work",
    title: "Senior Data Scientist",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    period: "2022 — Present",
    description: "Leading ML initiatives for fraud detection and recommendation systems. Built end-to-end pipelines processing 50M+ events daily.",
    achievements: [
      "Reduced fraud losses by 34% through real-time ML models",
      "Led team of 5 data scientists on enterprise projects",
      "Deployed 12 production ML models with 99.9% uptime",
    ],
    tags: ["Team Lead", "MLOps", "Real-time ML"],
  },
  {
    type: "work",
    title: "Data Scientist",
    company: "DataDriven Inc",
    location: "New York, NY",
    period: "2020 — 2022",
    description: "Developed predictive analytics solutions for Fortune 500 clients across retail, finance, and healthcare sectors.",
    achievements: [
      "Built customer churn model saving $2M annually",
      "Implemented A/B testing framework used company-wide",
      "Published 3 internal research papers on NLP techniques",
    ],
    tags: ["Analytics", "NLP", "A/B Testing"],
  },
  {
    type: "work",
    title: "ML Research Intern",
    company: "Google AI",
    location: "Mountain View, CA",
    period: "Summer 2019",
    description: "Contributed to research on efficient transformer architectures for on-device ML applications.",
    achievements: [
      "Co-authored paper published at NeurIPS 2020",
      "Achieved 40% model size reduction with minimal accuracy loss",
    ],
    tags: ["Research", "Transformers", "Model Optimization"],
  },
]

const education = [
  {
    degree: "Ph.D. in Computer Science",
    school: "Stanford University",
    period: "2017 — 2020",
    focus: "Deep Learning & NLP",
  },
  {
    degree: "M.S. in Statistics",
    school: "UC Berkeley",
    period: "2015 — 2017",
    focus: "Machine Learning",
  },
  {
    degree: "B.S. in Mathematics",
    school: "MIT",
    period: "2011 — 2015",
    focus: "Applied Mathematics",
  },
]

const awards = [
  "Best Paper Award — NeurIPS 2020",
  "Kaggle Grandmaster (Top 100)",
  "Google AI Residency Fellowship",
  "NSF Graduate Research Fellowship",
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-4 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{"// Career Journey"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey through academia and industry, building expertise
            in data science and machine learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Building2 className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-3" />
              
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
                      className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </motion.div>

                    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <span className="text-primary">@</span>
                        <span className="text-primary">{exp.company}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.location} • {exp.period}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-1 mb-4">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="text-sm flex gap-2">
                            <span className="text-primary">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Awards */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-card rounded-lg border border-border p-4"
                  >
                    <h4 className="font-medium text-sm">{edu.degree}</h4>
                    <p className="text-primary text-sm">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.period} • {edu.focus}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Awards</h3>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <ul className="space-y-3">
                  {awards.map((award, i) => (
                    <motion.li
                      key={award}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-primary mt-1">★</span>
                      {award}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
