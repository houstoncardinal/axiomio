import { motion } from "framer-motion";
import { Play, Headphones, Video, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mediaContent = [
  {
    type: "podcast",
    title: "The Future of Cloud Operations with AI",
    description: "Exploring how AI agents are revolutionizing DevOps, SecOps, and cloud management.",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    duration: "45 min",
    platform: "Spotify",
    url: "#",
  },
  {
    type: "video",
    title: "XOPS360 Platform Demo",
    description: "A comprehensive walkthrough of the XOPS360 unified operations platform.",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    duration: "12 min",
    platform: "YouTube",
    url: "#",
  },
  {
    type: "podcast",
    title: "Zero Trust Security in Modern Enterprises",
    description: "Deep dive into implementing XeroTrust security frameworks at scale.",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    duration: "38 min",
    platform: "Apple Podcasts",
    url: "#",
  },
  {
    type: "video",
    title: "Cloud Cost Optimization Strategies",
    description: "Practical techniques to reduce cloud spend by up to 40% without sacrificing performance.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    duration: "18 min",
    platform: "YouTube",
    url: "#",
  },
];

export function PodcastSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Media & Insights"
            title="Podcasts & Videos"
            description="Tune in to our thought leadership content on cloud, security, and digital transformation."
          />
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {mediaContent.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        item.type === "podcast"
                          ? "bg-violet-500/90"
                          : "bg-red-500/90"
                      } text-white`}
                    >
                      {item.type === "podcast" ? (
                        <Headphones className="w-3 h-3 mr-1" />
                      ) : (
                        <Video className="w-3 h-3 mr-1" />
                      )}
                      {item.type === "podcast" ? "Podcast" : "Video"}
                    </Badge>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 rounded bg-background/90 text-xs font-medium text-foreground">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-muted-foreground">{item.platform}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Subscribe to stay updated with our latest content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">
              <Headphones className="mr-2 h-4 w-4" />
              Follow on Spotify
            </Button>
            <Button variant="outline">
              <Video className="mr-2 h-4 w-4" />
              Subscribe on YouTube
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
