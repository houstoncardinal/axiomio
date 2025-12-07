import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "XOPS360 transformed our operations in ways we didn't think possible. We reduced deployment times by 70% and eliminated nearly all manual interventions.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Global FinTech Leader",
    image: null,
  },
  {
    quote: "The unified approach to DevOps, DataOps, and MLOps gave us unprecedented visibility. Decision-making has never been faster or more informed.",
    author: "Marcus Williams",
    role: "VP of Engineering",
    company: "Fortune 100 Enterprise",
    image: null,
  },
  {
    quote: "Axiomio's strategic insight combined with XOPS360's capabilities helped us achieve 99.99% uptime while scaling 5x. Exceptional partnership.",
    author: "Elena Rodriguez",
    role: "Head of Infrastructure",
    company: "Leading Healthcare Provider",
    image: null,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]"
          animate={{ x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6"
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Trusted by industry leaders
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>

                {/* Quote */}
                <p className="text-lg text-foreground/90 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-primary/30 via-transparent to-secondary/30">
                    <div className="absolute inset-px rounded-2xl bg-card" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
