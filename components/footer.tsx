"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Alex Chen. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="h-4 w-4 text-primary fill-primary" />
            </motion.span>
            {" "}and data
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 text-sm text-muted-foreground"
          >
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
