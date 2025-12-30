import { Link } from "react-router-dom";
import axiomioLogo from "@/assets/axiomio-logo-transparent.png";
import { SERVICE_CATEGORIES } from "@/config/services.config";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/approach", label: "Approach" },
    { href: "/contact", label: "Contact" },
  ],
  products: [
    { href: "/xops360", label: "Xops360", description: "Unified CloudOps Platform" },
    { href: "/xerotrust", label: "XeroTrust", description: "Zero Trust Security" },
  ],
  services: SERVICE_CATEGORIES.slice(0, 6).map(cat => ({
    href: cat.route,
    label: cat.title
  })),
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
