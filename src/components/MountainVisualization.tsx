import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const GenerativeMountainScene = lazy(() => import("@/components/ui/mountain-scene"));

export function MountainVisualization() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Three.js Scene Container */}
      <div className="absolute inset-0 opacity-60">
        <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
          <GenerativeMountainScene />
        </Suspense>
      </div>
      
      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              <Waves className="w-4 h-4" />
              Dynamic Infrastructure
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Navigating the{" "}
            <span className="text-primary">complexity</span> of modern operations
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Like the ever-shifting landscape you see, enterprise operations are dynamic and complex. 
            XOPS360 brings clarity to chaos—unifying your DevOps, DataOps, MLOps, and AIOps 
            into a single, intelligent platform.
          </motion.p>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/xops360">
                Discover XOPS360
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

export default MountainVisualization;
