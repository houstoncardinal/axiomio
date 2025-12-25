import { Link } from "react-router-dom";
import axiomioLogo from "@/assets/axiomio-logo-transparent.png";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/approach", label: "Approach" },
    { href: "/contact", label: "Contact" },
  ],
  products: [
    { href: "/xops360", label: "XOPS360", description: "Unified CloudOps Platform" },
    { href: "/xerotrust", label: "XeroTrust", description: "Zero Trust Security" },
  ],
  services: [
    { href: "/services/strategy-advisory", label: "Strategy & Advisory" },
    { href: "/services/technology-systems", label: "Technology & Systems" },
    { href: "/services/ai-automation", label: "AI & Automation" },
    { href: "/services/digital-transformation", label: "Digital Transformation" },
    { href: "/services/cybersecurity", label: "Cyber Security" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src={axiomioLogo} 
                alt="AXIOMIO" 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              A high-caliber technology and strategy firm operating at the intersection of 
              advanced systems, AI-driven solutions, and enterprise-grade execution.
            </p>
            
            {/* Product logos */}
            <div className="flex items-center gap-4">
              <Link to="/xops360" className="group">
                <img 
                  src="/logos/Xops360/Logo_Sky_Blue.png" 
                  alt="XOPS360" 
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link to="/xerotrust" className="group">
                <img 
                  src="/logos/xero-trust/_XeroTrust_-lightbcg.png" 
                  alt="XeroTrust" 
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity dark:hidden"
                />
                <img 
                  src="/logos/xero-trust/_XeroTrust_-darkbcg.png" 
                  alt="XeroTrust" 
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity hidden dark:block"
                />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="block text-xs text-muted-foreground/60">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AXIOMIO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
        {/* Cardinal Consulting Credit */}
        <div className="mt-6 flex justify-end">
          <a 
            href="https://www.visitcardinal.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Built by Cardinal Consulting
          </a>
        </div>
      </div>
    </footer>
  );
}
