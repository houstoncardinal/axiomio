import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "XOPS360 transformed our operations in ways we didn't think possible. We reduced deployment times by 70% and eliminated nearly all manual interventions.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Global FinTech Leader",
    metric: "70%",
    metricLabel: "Faster Deployments",
  },
  {
    quote: "The unified approach to DevOps, DataOps, and MLOps gave us unprecedented visibility. Decision-making has never been faster or more informed.",
    author: "Marcus Williams",
    role: "VP of Engineering",
    company: "Fortune 100 Enterprise",
    metric: "5x",
    metricLabel: "Faster Decisions",
  },
  {
    quote: "Axiomio's strategic insight combined with XOPS360's capabilities helped us achieve 99.99% uptime while scaling 5x. Exceptional partnership.",
    author: "Elena Rodriguez",
    role: "Head of Infrastructure",
    company: "Leading Healthcare Provider",
    metric: "99.99%",
    metricLabel: "Uptime Achieved",
  },
  {
    quote: "XeroTrust's zero-trust architecture reduced our security incidents by 85% in the first quarter. The ROI was immediate and substantial.",
    author: "David Park",
    role: "CISO",
    company: "Major Retail Chain",
    metric: "85%",
    metricLabel: "Fewer Incidents",
  },
  {
    quote: "The integration was seamless. Within weeks, we had complete visibility across our entire cloud infrastructure with automated remediation.",
    author: "Amanda Foster",
    role: "Director of Cloud Operations",
    company: "Enterprise SaaS Platform",
    metric: "3 weeks",
    metricLabel: "Time to Value",
  },
];

// Featured video testimonials
const videoTestimonials = [
  {
    name: "Andy Zhulenev",
    role: "CEO",
    company: "OneForce",
    companyLogo: "/logos/client-logos/oneforce.png",
    quote: "We decided to partner with Axiom to move fast in building our AWS application. Axiom's cloud proficiency and strategic partnership were key to the success of our AWS application development.",
    videoId: "c_leaFmNUVs",
    thumbnail: "https://img.youtube.com/vi/c_leaFmNUVs/maxresdefault.jpg",
  },
  {
    name: "Hanuman Kamma",
    role: "Co-founder and CEO",
    company: "EnParadigm",
    companyLogo: null,
    companyName: "enparadigm",
    quote: "Axiom's proactive support and focus on customer success enabled our team to concentrate on building innovative products.",
    videoId: "YTRu6bNNBwg",
    thumbnail: "https://img.youtube.com/vi/YTRu6bNNBwg/maxresdefault.jpg",
  },
];

function VideoTestimonialCard({ testimonial, isActive }: { testimonial: typeof videoTestimonials[0]; isActive: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-muted/40 to-muted/10 rounded-3xl overflow-hidden border border-border/50">
      {/* Video Player */}
      <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[300px]">
        {isPlaying ? (
          <div className="absolute inset-0">
            <iframe
              src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
              title="Client Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div 
            className="absolute inset-0 cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={testimonial.thumbnail}
              alt={`${testimonial.name} testimonial`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors"
              >
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </div>

            {/* Watch Video Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              <Play className="w-4 h-4" fill="currentColor" />
              Watch Video
            </div>

            {/* Name overlay on image */}
            <div className="absolute top-1/3 right-8 text-right hidden lg:block">
              <span className="font-heading text-5xl xl:text-6xl font-bold text-white/20 uppercase tracking-wider">
                {testimonial.name.split(' ')[0]}
              </span>
              <br />
              <span className="font-heading text-5xl xl:text-6xl font-bold text-white/20 uppercase tracking-wider">
                {testimonial.name.split(' ')[1]}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 lg:p-12">
        <div className="mb-6">
          <span className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Hear From Clients
          </span>
        </div>

        {/* Company Logo or Name */}
        <div className="mb-8">
          {testimonial.companyLogo ? (
            <img 
              src={testimonial.companyLogo} 
              alt={`${testimonial.company} logo`} 
              className="h-10 object-contain dark:invert"
            />
          ) : (
            <span className="font-heading text-2xl font-bold text-foreground">
              {testimonial.companyName}
              <span className="text-primary">▪</span>
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-primary/30 mb-6" />

        {/* Quote */}
        <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div>
          <div className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6"
          >
            Client Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Why Clients Trust and Love To Work With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            See how enterprises achieve transformational results with Axiomio
          </motion.p>
        </div>

        {/* Featured Video Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={currentVideoIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VideoTestimonialCard 
                testimonial={videoTestimonials[currentVideoIndex]} 
                isActive={true}
              />
            </motion.div>

            {/* Video Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevVideo}
                className="p-2 rounded-full bg-background border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentVideoIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextVideo}
                className="p-2 rounded-full bg-background border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full">
                    <div className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col group">
                      {/* Metric badge */}
                      <div className="absolute -top-4 right-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-primary font-bold">{testimonial.metric}</span>
                        <span className="text-xs text-muted-foreground ml-1">{testimonial.metricLabel}</span>
                      </div>

                      {/* Quote icon */}
                      <div className="mb-6 mt-4">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-muted/50 border-border/50 hover:bg-primary/10 hover:border-primary/30" />
              <CarouselNext className="static translate-y-0 bg-muted/50 border-border/50 hover:bg-primary/10 hover:border-primary/30" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}