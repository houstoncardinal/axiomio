import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock, Tag, ExternalLink, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  url: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "Deploying Kafka MirrorMaker on Kubernetes for Seamless Data Synchronization",
    excerpt: "Learn how to deploy Kafka MirrorMaker on Kubernetes for seamless data synchronization across clusters, ensuring high availability and real-time replication.",
    category: "DevOps",
    author: "Krishna Mohan Pothana",
    date: "Jun 26, 2024",
    readTime: "7 min read",
    url: "https://blog.axiomio.com/deploying-kafka-mirrormaker-on-kubernetes-for-seamless-data-synchronization-ead3e676bb17",
    featured: true,
  },
  {
    title: "Revolutionizing Business with Low-Code Platforms: A Deep Dive into Creatio",
    excerpt: "In today's fast-paced digital landscape, businesses must adapt swiftly to stay competitive. Traditional software development, hampered by lengthy cycles, is giving way to low-code platforms.",
    category: "Application Development",
    author: "Aishwarya L",
    date: "Jun 7, 2024",
    readTime: "4 min read",
    url: "https://blog.axiomio.com/revolutionizing-business-with-low-code-platforms-a-deep-dive-into-creatio-15bcdad9819c",
  },
  {
    title: "Streamlining Storage Management: Integrating Amazon EBS Volumes with Amazon ECS Fargate",
    excerpt: "The integration of Amazon Elastic Container Service (ECS) with Amazon Elastic Block Store (EBS) marks a significant advancement in container storage management.",
    category: "Cloud Ops",
    author: "Anjibabu P",
    date: "May 9, 2024",
    readTime: "4 min read",
    url: "https://blog.axiomio.com/streamlining-storage-management-integrating-amazon-ebs-volumes-with-amazon-ecs-fargate-f764da47cf70",
  },
  {
    title: "Podman: A Secure Alternative to Docker for Containerization",
    excerpt: "Explore Podman as a secure, daemonless alternative to Docker for containerization. Learn about rootless containers and enhanced security features.",
    category: "DevOps",
    author: "Subbaraju N",
    date: "Apr 18, 2024",
    readTime: "3 min read",
    url: "https://blog.axiomio.com/podman-a-secure-alternative-to-docker-for-containerization-ad31a1d8bcf5",
  },
  {
    title: "Revolutionizing Remote Work with Amazon Workspace",
    excerpt: "Discover how Amazon WorkSpaces is transforming remote work by providing secure, scalable virtual desktops that enable productivity from anywhere.",
    category: "Digital Workspaces",
    author: "Sasipriyanka Sabbavarapu",
    date: "Mar 28, 2024",
    readTime: "4 min read",
    url: "https://blog.axiomio.com/revolutionizing-remote-work-with-amazon-workspace-123f56fc7d2c",
  },
  {
    title: "Transforming Access Dynamics: AXIOMIO's Solution for Multi-Identity AWS Integration",
    excerpt: "Learn how AXIOMIO solves complex multi-identity AWS integration challenges, enabling seamless access management across multiple accounts and identities.",
    category: "Cloud Security",
    author: "Sriram Kesavarapu",
    date: "Mar 18, 2024",
    readTime: "2 min read",
    url: "https://blog.axiomio.com/transforming-access-dynamics-axiomios-solution-for-multi-identity-aws-integration-36cafc377842",
  },
  {
    title: "AWS Security Compliance: A Hands-On Approach with SSM Automation",
    excerpt: "Achieve AWS security compliance through hands-on SSM automation. Learn practical approaches to automate security checks and maintain compliance.",
    category: "Cloud Security",
    author: "Mallikarjuna M",
    date: "Mar 1, 2024",
    readTime: "5 min read",
    url: "https://blog.axiomio.com/aws-security-compliance-a-hands-on-approach-with-ssm-automation-28e07780a1e9",
  },
  {
    title: "Demystifying Kubernetes: Understanding CNI, CSI, and CRI",
    excerpt: "Kubernetes has revolutionized container orchestration. Central to its success are three critical interfaces: CNI, CSI, and CRI. Let's demystify them.",
    category: "DevOps",
    author: "Sri Harsha Tolety",
    date: "Feb 15, 2024",
    readTime: "1 min read",
    url: "https://blog.axiomio.com/demystifying-kubernetes-understanding-cni-csi-and-cri-9bf1976bbc7d",
  },
  {
    title: "Integrating AWS GuardDuty Findings with Amazon S3",
    excerpt: "Learn how to integrate AWS GuardDuty findings with Amazon S3 for centralized security monitoring and threat detection data storage.",
    category: "Cloud Security",
    author: "Kishan Kalidindi",
    date: "Feb 1, 2024",
    readTime: "2 min read",
    url: "https://blog.axiomio.com/integrating-aws-guardduty-findings-with-amazon-s3-35848e4d6326",
  },
  {
    title: "How to Stream Logs from CloudWatch to OpenSearch Using AWS Kinesis",
    excerpt: "This comprehensive guide will take you through the process of streaming logs from Amazon CloudWatch to Amazon OpenSearch via AWS Kinesis for real-time analytics.",
    category: "Cloud Ops",
    author: "Krishna teja",
    date: "Dec 5, 2023",
    readTime: "4 min read",
    url: "https://blog.axiomio.com/how-to-stream-logs-from-cloudwatch-to-opensearch-using-aws-kinesis-910569d3213e",
  },
  {
    title: "How to Set Up AWS Resources Configuration Change Alerts",
    excerpt: "Learn how to set up AWS resources configuration change alerts for effective AWS resource management and compliance monitoring.",
    category: "Cloud Ops",
    author: "Mallikarjuna M",
    date: "Dec 4, 2023",
    readTime: "3 min read",
    url: "https://blog.axiomio.com/how-to-set-up-aws-resources-configuration-change-alerts-for-aws-resource-management-users-d267cc55aa99",
  },
  {
    title: "Everything You Need to Know About Hacks, Malware, and Cyberattacks",
    excerpt: "The digital world is now the real world. Businesses are digitizing their services everywhere. Learn about modern cyber threats and how to protect against them.",
    category: "Cloud Security",
    author: "PK",
    date: "Oct 26, 2022",
    readTime: "4 min read",
    url: "https://blog.axiomio.com/everything-you-need-to-know-about-hacks-malware-and-cyberattacks-ab9122c1236",
  },
  {
    title: "Cybersecurity Trends to Look for in the Coming Years",
    excerpt: "Today, cyber threats are more complex and widely distributed than ever. Discover the key cybersecurity trends that will shape the future of digital security.",
    category: "Cloud Security",
    author: "PK",
    date: "Oct 26, 2022",
    readTime: "3 min read",
    url: "https://blog.axiomio.com/cybersecurity-trends-to-look-for-in-the-coming-years-5bbf84664da2",
  },
];

const categories = [
  "All",
  "DevOps",
  "Cloud Ops",
  "Cloud Security",
  "Application Development",
  "Digital Workspaces",
  "Cloud Migration",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog & Technical Insights | AXIOMIO"
        description="Explore technical insights, tutorials, and guides on cloud infrastructure, DevOps, Kubernetes, AWS, Azure, and cloud security from AXIOMIO experts."
        keywords="cloud blog, DevOps tutorials, AWS guides, Azure tutorials, Kubernetes, cloud security, digital transformation insights"
        canonicalUrl="https://axiomio.com/blog"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              label="Blog & Resources"
              title="Technical Insights & Guides"
              description="Expert knowledge from our cloud and DevOps engineers. Dive into tutorials, best practices, and real-world solutions."
            />
          </motion.div>

          {/* Search */}
          <motion.div
            className="max-w-xl mx-auto mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-xl bg-card/50 border-border/50 focus:border-primary"
              />
            </div>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
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
            <motion.a
              href={featuredPost.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Featured • {featuredPost.category}
                </Badge>
                <h2 className="font-heading text-2xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button variant="hero" className="group-hover:translate-x-1 transition-transform">
                  Read on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.a>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          {regularPosts.length === 0 && !featuredPost ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <article className="h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-muted">
                          <Tag className="w-3 h-3 mr-1" />
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
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
                  </article>
                </motion.a>
              ))}
            </div>
          )}

          {/* View More on Medium */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://blog.axiomio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                View All Articles on Medium
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "46+", label: "Followers" },
              { value: "5", label: "Expert Authors" },
              { value: "13+", label: "Technical Articles" },
              { value: "7", label: "Topic Categories" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-heading text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center glass-premium rounded-2xl p-8 lg:p-12 border border-border/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Follow us on Medium for weekly updates on cloud, DevOps, and digital transformation.
            </p>
            <a
              href="https://blog.axiomio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Follow AXIOMIO on Medium
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}