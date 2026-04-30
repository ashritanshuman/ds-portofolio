"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const bars = [
    { height: 60, delay: 0 },
    { height: 85, delay: 0.1 },
    { height: 45, delay: 0.2 },
    { height: 70, delay: 0.3 },
    { height: 90, delay: 0.4 },
    { height: 55, delay: 0.5 },
    { height: 75, delay: 0.6 },
    { height: 40, delay: 0.7 },
  ]

  const linePoints = [
    { x: 0, y: 80 },
    { x: 50, y: 40 },
    { x: 100, y: 60 },
    { x: 150, y: 25 },
    { x: 200, y: 50 },
    { x: 250, y: 15 },
    { x: 300, y: 35 },
  ]

  const pathD = linePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
      
      {/* Main card */}
      <motion.div
        initial={{ rotateY: -10, rotateX: 10 }}
        animate={{ rotateY: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-6 h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground font-mono">Analytics Dashboard</p>
            <p className="text-xl font-semibold">Model Performance</p>
          </div>
          <div className="flex gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-chart-1"
            />
            <div className="w-2 h-2 rounded-full bg-chart-2" />
            <div className="w-2 h-2 rounded-full bg-chart-3" />
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end justify-between h-32 gap-2 mb-6">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${bar.height}%` }}
              transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/80 to-primary"
            />
          ))}
        </div>

        {/* Line chart */}
        <div className="relative h-24 mb-4">
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="300"
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.1"
                strokeDasharray="4 4"
              />
            ))}
            
            {/* Animated line */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.72 0.15 185)" />
                <stop offset="100%" stopColor="oklch(0.65 0.18 160)" />
              </linearGradient>
            </defs>
            
            {/* Data points */}
            {linePoints.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="oklch(0.72 0.15 185)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
              />
            ))}
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Accuracy", value: "97.8%", trend: "+2.3%" },
            { label: "Precision", value: "94.2%", trend: "+1.8%" },
            { label: "F1 Score", value: "96.1%", trend: "+2.1%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-lg font-semibold">{stat.value}</p>
              <p className="text-xs text-chart-1">{stat.trend}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/10 rounded-full"
        />
      </motion.div>
    </div>
  )
}
