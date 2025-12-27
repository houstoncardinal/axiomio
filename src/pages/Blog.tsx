import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "DreamCasino Scales Up While Reducing Costs by 30% Using AWS",
    excerpt: "Most companies outside the technology industry ultimately want to spend their time and effort building their unique capabilities, not managing infrastructure. Learn how DreamCasino achieved 30% cost reduction while scaling their platform.",
    image: "https://axiomio.com/wp-content/uploads/2025/08/DreamCasino.png",
    category: "Case Study",
    author: "AxiomIO Admin",
    date: "2025",
    readTime: "8 min read",
    slug: "dreamcasino-aws-case-study",
    featured: true,
  },
  {
    title: "Quickstart: Create a Front Door in Azure",
    excerpt: "Microsoft Azure Front Door is a global, scalable, and secure entry point for high-performance web applications. In this guide, we walk through setting up Azure Front Door for your applications.",
    image: "https://axiomio.com/wp-content/uploads/2025/02/Enterprises-in-Digital-Era-Role-of-Cloud-Data-AI-1.png",
    category: "Tutorial",
    author: "xopsadmin",
    date: "2025",
    readTime: "6 min read",
    slug: "azure-front-door-quickstart",
  },
  {
    title: "Secure Log Transfer in Private Communication with Public Access to Open Search Dashboard",
    excerpt: "In modern cloud environments, efficient management and analysis of logs is crucial. However, balancing security and accessibility can be challenging. Learn our approach.",
    image: "https://axiomio.com/wp-content/uploads/2024/05/blog-img-0003.png",
    category: "Security",
    author: "xopsadmin",
    date: "2024",
    readTime: "10 min read",
    slug: "secure-log-transfer-opensearch",
  },
  {
    title: "How to Onboard a Customer to Azure Lighthouse: A Step-by-Step Guide for MSPs",
    excerpt: "Azure Lighthouse is a powerful solution designed for multitenant management, offering scalability, enhanced automation, and stronger governance across Azure environments.",
    image: "https://axiomio.com/wp-content/uploads/2024/11/Empowering-MSPs-with-seamless-secure-and-scalable-Azure-management.jpg",
    category: "Guide",
    author: "xopsadmin",
    date: "2024",
    readTime: "12 min read",
    slug: "azure-lighthouse-guide",
  },
  {
    title: "How to Securely Deploy Application in Azure Private Network",
    excerpt: "Deploy Azure Container Instances for WordPress and MySQL within a private network. We'll walk through the complete setup including security configurations.",
    image: "https://axiomio.com/wp-content/uploads/2024/11/Securely-Deploy-WordPress-and-MySQL-in-a-Private-Azure-Network-with-AxiomIO-1.jpg",
    category: "Tutorial",
    author: "xopsadmin",
    date: "2024",
    readTime: "15 min read",
    slug: "azure-private-network-deployment",
  },
  {
    title: "How to Stream Logs from CloudWatch to OpenSearch Using AWS Kinesis",
    excerpt: "This comprehensive guide will take you through the process of streaming logs from Amazon CloudWatch to Amazon OpenSearch via AWS Kinesis for real-time analytics.",
    image: "https://axiomio.com/wp-content/uploads/2024/05/blog-img-0001.png",
    category: "Tutorial",
    author: "xopsadmin",
    date: "2024",
    readTime: "10 min read",
    slug: "cloudwatch-opensearch-kinesis",
  },
];

const categories = ["All", "Case Study", "Tutorial", "Security", "Guide", "DevOps", "Cloud"];

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog & Resources | AXIOMIO"
        description="Explore technical insights, case studies, and guides on cloud infrastructure, DevOps, security, and digital transformation from AXIOMIO experts."
        keywords="cloud blog, DevOps tutorials, AWS guides, Azure tutorials, cloud security, digital transformation insights"
        canonicalUrl="https://axiomio.com/blog"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              label="Blog & Resources"
              title="Insights & Technical Guides"
              description="Explore our collection of technical articles, case studies, and best practices from cloud and DevOps experts."
            />
          </motion.div>

          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-card border border-border"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                    Featured • {featuredPost.category}
                  </Badge>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button variant="hero" className="w-fit">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for weekly updates on cloud, DevOps, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none min-w-[280px]"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
