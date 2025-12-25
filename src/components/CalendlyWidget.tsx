import { motion } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Book a Meeting"
            title="Let's Discuss Your Goals"
            description="Schedule a free consultation with our experts to explore how we can accelerate your digital transformation."
          />
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Meeting Types */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Video className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Video Call</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">30 min</span>
                </div>
              </div>

              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                What to Expect
              </h3>

              <ul className="space-y-4">
                {meetingBenefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Team Avatars */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">You'll be speaking with:</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["K", "R", "S"].map((initial, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-sm font-bold text-primary-foreground border-2 border-background"
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Cloud & DevOps Experts</p>
                    <p className="text-xs text-muted-foreground">15+ years combined experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Calendly Embed Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-card border border-border p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-primary-foreground" />
              </div>

              <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                Schedule Your Free Consultation
              </h4>
              <p className="text-muted-foreground mb-8">
                Pick a time that works for you and let's start the conversation.
              </p>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={openCalendly}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                Powered by Calendly • No account required
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
