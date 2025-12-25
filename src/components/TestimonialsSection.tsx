import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useState } from "react";

// Featured video testimonials
const videoTestimonials = [
  {
    name: "Andy Zhulenev",
    firstName: "ANDY",
    lastName: "ZHULENEV",
    role: "CEO",
    company: "Oneforce",
    companyLogo: "/logos/client-logos/oneforce.png",
    quote: "We decided to partner with Axiom to move fast in building our AWS application. Axiom's cloud proficiency and strategic partnership were key to the success of our AWS application development.",
    videoId: "c_leaFmNUVs",
    thumbnail: "https://img.youtube.com/vi/c_leaFmNUVs/maxresdefault.jpg",
  },
  {
    name: "Hanuman Kamma",
    firstName: "HANUMAN",
    lastName: "KAMMA",
    role: "Co-founder and CEO",
    company: "EnParadigm",
    companyLogo: null,
    companyName: "enparadigm",
    quote: "Axiom's proactive support and focus on customer success enabled our team to concentrate on building innovative products.",
    videoId: "YTRu6bNNBwg",
    thumbnail: "https://img.youtube.com/vi/YTRu6bNNBwg/maxresdefault.jpg",
  },
];

export function TestimonialsSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTestimonial = videoTestimonials[currentVideoIndex];

  const nextVideo = () => {
    setIsPlaying(false);
    setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setIsPlaying(false);
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

        {/* Featured Video Testimonial - Full Width Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden bg-muted/30"
          >
            {/* Main Layout Container */}
            <div className="relative min-h-[500px] lg:min-h-[600px]">
              
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20" />
              
              {/* Person Image - Right Side */}
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%]">
                {isPlaying ? (
                  <div className="absolute inset-0">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentTestimonial.videoId}?autoplay=1&rel=0`}
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
                      src={currentTestimonial.thumbnail}
                      alt={`${currentTestimonial.name} testimonial`}
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Gradient overlay from left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/70 to-transparent lg:via-muted/40" />
                    
                    {/* Name in background - behind the person */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/4 text-right hidden lg:block pointer-events-none">
                      <span className="font-heading text-6xl xl:text-7xl font-bold text-primary/10 uppercase tracking-wider block">
                        {currentTestimonial.firstName}
                      </span>
                      <span className="font-heading text-6xl xl:text-7xl font-bold text-primary/10 uppercase tracking-wider block">
                        {currentTestimonial.lastName}
                      </span>
                    </div>
                    
                    {/* Play Button - Center */}
                    <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[20%]">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors"
                      >
                        <Play className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>

              {/* Watch Video Badge - Top Left */}
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium z-20 shadow-lg">
                <Play className="w-4 h-4" fill="currentColor" />
                WATCH VIDEO
              </div>

              {/* Left Content - Hear From Clients + Logo */}
              <div className="relative z-10 p-8 lg:p-12 lg:w-[50%] flex flex-col justify-center min-h-[300px] lg:min-h-[400px]">
                <div className="mb-4 lg:mb-6">
                  <span className="text-sm lg:text-base font-semibold uppercase tracking-[0.15em] text-primary">
                    HEAR FROM CLIENTS
                  </span>
                </div>

                {/* Company Logo or Name */}
                <div className="mb-0">
                  {currentTestimonial.companyLogo ? (
                    <img 
                      src={currentTestimonial.companyLogo} 
                      alt={`${currentTestimonial.company} logo`} 
                      className="h-10 lg:h-12 object-contain dark:invert"
                    />
                  ) : (
                    <span className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                      {currentTestimonial.companyName}
                      <span className="text-orange-500 ml-0.5">▪</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Quote Card - Bottom Left Overlay */}
              <div className="relative z-20 mx-4 mb-4 lg:absolute lg:bottom-8 lg:left-8 lg:max-w-md lg:mx-0 lg:mb-0">
                <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-border/50">
                  {/* Company Logo in Card */}
                  <div className="mb-4">
                    {currentTestimonial.companyLogo ? (
                      <img 
                        src={currentTestimonial.companyLogo} 
                        alt={`${currentTestimonial.company} logo`} 
                        className="h-6 lg:h-8 object-contain dark:invert"
                      />
                    ) : (
                      <span className="font-heading text-xl font-bold text-foreground">
                        {currentTestimonial.companyName}
                        <span className="text-orange-500 ml-0.5">▪</span>
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-primary/40 mb-4" />

                  {/* Quote */}
                  <p className="text-sm lg:text-base text-foreground leading-relaxed mb-6">
                    {currentTestimonial.quote}
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-heading text-base lg:text-lg font-bold text-primary uppercase tracking-wide">
                      {currentTestimonial.name.toUpperCase()}
                    </div>
                    <div className="text-xs lg:text-sm text-muted-foreground">
                      {currentTestimonial.role} - {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navy Bar at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-20 bg-primary/90 hidden lg:block" />
              
              {/* Navigation - Bottom Right on Navy Bar */}
              <div className="absolute bottom-4 right-8 lg:bottom-6 lg:right-12 flex items-center gap-4 z-30">
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
                      onClick={() => {
                        setIsPlaying(false);
                        setCurrentVideoIndex(index);
                      }}
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
        </motion.div>
      </div>
    </section>
  );
}