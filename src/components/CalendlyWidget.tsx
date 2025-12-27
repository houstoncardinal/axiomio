import { motion } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";

const meetingBenefits = [
  "30-minute discovery call with a cloud expert",
  "Review of your current infrastructure",
  "Customized recommendations for your business",
  "No obligation, completely free consultation",
];

export function CalendlyWidget() {
  const calendlyUrl = "https://calendly.com/kishan-k";

  const openCalendly = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Book a Meeting</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Discuss Your Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation with our experts to explore how we can accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Left Side - Benefits with Enhanced Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-card border border-border p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Meeting Types */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Video Call</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted border border-border shadow-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-muted-foreground">30 min</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  What to Expect
                </h3>

                <ul className="space-y-5 mb-8">
                  {meetingBenefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Team Avatars */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">You'll be speaking with:</p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {["K", "R", "S"].map((initial, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-sm font-bold text-primary-foreground border-2 border-background shadow-md"
                        >
                          {initial}
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Cloud & DevOps Experts</p>
                      <p className="text-xs text-muted-foreground">15+ years combined experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Calendly Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border border-border p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-center relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-2xl" />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar className="w-12 h-12 text-primary-foreground" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Schedule Your Free Consultation
                  </h4>

                  {/* Description */}
                  <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-sm mx-auto">
                    Pick a time that works for you and let's start the conversation about your transformation journey.
                  </p>

                  {/* CTA Button - Centered */}
                  <div className="flex justify-center">
                    <MagneticButton>
                      <Button
                        variant="hero"
                        size="xl"
                        onClick={openCalendly}
                        className="group/btn"
                      >
                        <Calendar className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Book a Meeting
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </MagneticButton>
                  </div>

                  {/* Footer Note */}
                  <p className="text-xs text-muted-foreground mt-6 opacity-70">
                    Powered by Calendly • No account required
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Trust Indicators - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 rounded-2xl bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Instant Confirmation</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Free Consultation</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">No Obligation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
