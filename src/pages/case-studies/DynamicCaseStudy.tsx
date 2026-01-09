import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, TrendingDown, Zap, Clock, ShieldCheck, Users, DollarSign, Percent, Server, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MagneticButton } from '@/components/MagneticButton';
import { useCaseStudy } from '@/hooks/useCaseStudies';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  TrendingUp,
  TrendingDown,
  Clock,
  ShieldCheck,
  Users,
  DollarSign,
  Percent,
  Server,
  Cloud,
};

export default function DynamicCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { data: caseStudy, isLoading, error } = useCaseStudy(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Button variant="hero" asChild>
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back link */}
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            {/* Industry Badge */}
            <Badge className="bg-primary text-primary-foreground mb-4">{caseStudy.industry}</Badge>

            {/* Client */}
            <p className="text-xl text-muted-foreground mb-2">{caseStudy.client_name}</p>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {caseStudy.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8">{caseStudy.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags?.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {caseStudy.image_url && (
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={caseStudy.image_url}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Metrics */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Key Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.metrics.map((metric, idx) => {
                  const Icon = iconMap[metric.icon] || Zap;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-card border border-border text-center"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudy.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {caseStudy.challenge}
                  </p>
                </div>
              </motion.div>
            )}

            {caseStudy.solution && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {caseStudy.solution}
                  </p>
                </div>
              </motion.div>
            )}

            {caseStudy.results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">The Results</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {caseStudy.results}
                  </p>
                </div>
              </motion.div>
            )}

            {caseStudy.full_content && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {caseStudy.full_content}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to achieve similar results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how AXIOMIO can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/case-studies">View More Case Studies</Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}