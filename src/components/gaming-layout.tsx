"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GamingLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function GamingLayout({ children, className }: GamingLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-background font-mono relative",
      "before:content-[''] before:fixed before:inset-0 before:bg-grid-pattern before:opacity-10 before:pointer-events-none before:z-0",
      className
    )}>
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none animate-scanline opacity-10 z-50" />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="container max-w-5xl mx-auto px-6 py-12 min-h-screen flex flex-col">
          {/* Header with glowing effect */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-pixel text-glow-lg animate-glow mb-4">
              Rahulkumar Choudhary
            </h1>
            <p className="text-muted-foreground animate-pulse text-lg">
              DevOps Engineer 🐋 and Cloud Computing Enthusiast ☁️
            </p>
          </header>

          {/* Content area */}
          <main className="retro-container flex-grow mx-auto w-full">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>

          {/* Footer with pixel effect */}
          <footer className="mt-12 text-center text-sm text-muted-foreground">
            <p className="animate-pixel-shift">
              © 2024 Rahulkumar Choudhary • All rights reserved
            </p>
          </footer>
        </div>
      </motion.div>
    </div>
  );
} 