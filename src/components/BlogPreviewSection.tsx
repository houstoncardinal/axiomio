import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  url: string;
}

const featuredPosts: BlogPost[] = [
  {
    title: "Deploying Kafka MirrorMaker on Kubernetes for Seamless Data Synchronization",
    excerpt: "Learn how to deploy Kafka MirrorMaker on Kubernetes for seamless data synchronization across clusters.",
    category: "DevOps",
    author: "Krishna Mohan Pothana",
    date: "Jun 26, 2024",
    readTime: "7 min read",
    url: "https://blog.axiomio.com/deploying-kafka-mirrormaker-on-kubernetes-for-seamless-data-synchronization-ead3e676bb17",
  },
  {
    title: "Revolutionizing Business with Low-Code Platforms: A Deep Dive into Creatio",
    excerpt: "In today's fast-paced digital landscape, businesses must adapt swiftly. Low-code platforms are the answer.",
    category: "Application Development",
    author: "Aishwarya L",
    date: "Jun 7, 2024",
    readTime: "4 min read",
    url: "https://blog.axiomio.com/revolutionizing-business-with-low-code-platforms-a-deep-dive-into-creatio-15bcdad9819c",
  },
  {
    title: "AWS Security Compliance: A Hands-On Approach with SSM Automation",
    excerpt: "Achieve AWS security compliance through hands-on SSM automation and maintain continuous compliance.",
    category: "Cloud Security",
    author: "Mallikarjuna M",
    date: "Mar 1, 2024",
    readTime: "5 min read",
    url: "https://blog.axiomio.com/aws-security-compliance-a-hands-on-approach-with-ssm-automation-28e07780a1e9",
  },
];

export function BlogPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Blog & Insights"
            title="Latest from Our Experts"
            description="Technical deep-dives, tutorials, and best practices from our cloud and DevOps engineers."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {featuredPosts.map((post, index) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block"
            >
              <article className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="p-6 flex flex-col h-full">
                  <Badge variant="secondary" className="w-fit mb-4 bg-muted">
                    {post.category}
                  </Badge>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author.split(" ")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <Button variant="hero" size="lg">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://blog.axiomio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                Follow on Medium
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}