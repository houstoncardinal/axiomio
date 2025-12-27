import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { CareersSection } from "@/components/CareersSection";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Careers at AXIOMIO | Join Our Team"
        description="Join AXIOMIO and be part of a team shaping the future of cloud and AI operations. Explore open positions in engineering, security, and consulting."
        keywords="careers, jobs, cloud jobs, devops jobs, security analyst, solutions consultant, remote jobs, technology careers"
        canonicalUrl="https://axiomio.com/careers"
        ogType="website"
      />
      <Navbar />
      <main className="pt-20">
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}
