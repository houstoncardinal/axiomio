import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Axiom.io"
        description="Read the terms and conditions governing your use of Axiom.io services. Understand your rights and responsibilities when using our platform."
        canonicalUrl="https://axiomio.com/terms"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

              <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Axiom.io's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Axiom.io provides cloud consulting, DevOps, cybersecurity, and digital transformation services. Our services are subject to change, and we reserve the right to modify or discontinue any service at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of any account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on our website, including text, graphics, logos, and software, is the property of Axiom.io or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This obligation survives the termination of any agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Axiom.io shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Axiom.io and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Bangalore, Karnataka.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong className="text-foreground">Email:</strong> legal@axiomio.com<br />
                    <strong className="text-foreground">Address:</strong> Axiom.io, Technology Park, Bangalore, India
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
