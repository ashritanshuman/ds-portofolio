"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Neural Network Fraud Detection",
    description: "Deep learning model achieving 99.2% accuracy in detecting fraudulent transactions in real-time. Processed over 10M transactions daily.",
    tags: ["TensorFlow", "Python", "AWS", "Real-time ML"],
    metrics: { accuracy: "99.2%", latency: "<50ms", scale: "10M/day" },
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Transformer-based sentiment analysis tool for social media monitoring. Fine-tuned BERT model for domain-specific accuracy.",
    tags: ["PyTorch", "Transformers", "FastAPI", "Docker"],
    metrics: { accuracy: "94.7%", languages: "12", models: "BERT" },
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Predictive Maintenance System",
    description: "IoT sensor data analysis pipeline predicting equipment failures 72 hours in advance, reducing downtime by 45%.",
    tags: ["Scikit-learn", "Kafka", "TimescaleDB", "Grafana"],
    metrics: { prediction: "72h", accuracy: "91%", savings: "45%" },
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Customer Churn Prediction",
    description: "Ensemble model identifying at-risk customers with 89% precision, enabling proactive retention strategies.",
    tags: ["XGBoost", "Feature Engineering", "SQL", "Tableau"],
    metrics: { precision: "89%", recall: "85%", AUC: "0.94" },
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Image Classification API",
    description: "Production-ready computer vision API for product categorization. Handles 1000+ requests per second.",
    tags: ["CNN", "FastAPI", "Redis", "Kubernetes"],
    metrics: { accuracy: "96.3%", RPS: "1000+", latency: "30ms" },
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Time Series Forecasting",
    description: "LSTM-based demand forecasting system reducing inventory costs by 23% through accurate predictions.",
    tags: ["LSTM", "Prophet", "Airflow", "PostgreSQL"],
    metrics: { MAPE: "4.2%", horizon: "30 days", savings: "23%" },
    github: "#",
    demo: "#",
    featured: false,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-4 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">{"// Selected Work"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of data science and machine learning projects that showcase 
            my expertise in building production-ready AI systems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative bg-card rounded-xl border border-border p-6 md:p-8 overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 grid md:grid-cols-3 gap-6">
                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="text-center md:text-right p-3 rounded-lg bg-secondary/50"
                      >
                        <p className="text-lg md:text-xl font-bold text-primary">{value}</p>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-xl font-semibold mb-6"
        >
          Other Notable Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full bg-card rounded-xl border border-border p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
