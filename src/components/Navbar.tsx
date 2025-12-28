import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/MegaMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import axiomioLogo from "@/assets/axiomio-logo-transparent.png";
import { SERVICE_CATEGORIES } from "@/config/services.config";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/xops360", label: "Xops360", highlight: true },
  { href: "/xerotrust", label: "XeroTrust", highlight: true, secondary: true },
  {
    href: "/about",
    label: "About",
    hasDropdown: true,
    dropdownItems: [
      { href: "/about", label: "About Us" },
      { href: "/approach", label: "Our Approach" },
      { href: "/case-studies", label: "Case Studies" },
    ]
  },
  { href: "/services", label: "Services", hasMegaMenu: true },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setAboutDropdownOpen(false);
    };
    if (aboutDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [aboutDropdownOpen]);

  return (
    <>
      <motion.header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-background border-b border-border/30 shadow-sm py-3" 
            : "bg-background py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img 
                  src={axiomioLogo} 
                  alt="AXIOMIO" 
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasMegaMenu ? (
                    <button
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={cn(
                        "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                        megaMenuOpen || location.pathname.startsWith("/services")
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.label}
                      <ChevronDown 
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          megaMenuOpen && "rotate-180"
                        )} 
                      />
                    </button>
                  ) : link.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                          location.pathname === "/about" || location.pathname === "/approach" || location.pathname === "/case-studies"
                            ? "text-primary bg-primary/5"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {link.label}
                        <ChevronDown 
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-200",
                            aboutDropdownOpen && "rotate-180"
                          )} 
                        />
                      </Link>
                      
                      {/* About Dropdown */}
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-48 py-2 bg-background border border-border rounded-xl shadow-lg z-50"
                          >
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                  "block px-4 py-2.5 text-sm transition-colors",
                                  location.pathname === item.href
                                    ? "text-primary bg-primary/5"
                                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                                )}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        link.highlight && location.pathname !== link.href
                          ? link.secondary 
                            ? "text-secondary font-semibold"
                            : "text-primary font-semibold"
                          : location.pathname === link.href
                          ? link.secondary
                            ? "text-secondary bg-secondary/5"
                            : "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.highlight && (
                        <span className={cn(
                          "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full",
                          link.secondary ? "bg-secondary" : "bg-primary"
                        )} />
                      )}
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button variant="default" size="default" className="shadow-glow" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 flex flex-col gap-1 border-t border-border/50 mt-4 max-h-[calc(100vh-100px)] overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      {link.hasMegaMenu ? (
                        <div>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                              mobileServicesOpen || location.pathname.startsWith("/services")
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                mobileServicesOpen && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-1 ml-3 pl-3 border-l-2 border-primary/20 space-y-0.5">
                                  {SERVICE_CATEGORIES.map((category) => (
                                    <Link
                                      key={category.id}
                                      to={category.route}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                                    >
                                      {category.title}
                                    </Link>
                                  ))}
                                  <div className="h-px bg-border/30 my-1" />
                                  <Link
                                    to="/services"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/5 rounded-md transition-colors font-medium"
                                  >
                                    View All Services →
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                              mobileAboutOpen || location.pathname === "/about" || location.pathname === "/approach" || location.pathname === "/case-studies"
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                mobileAboutOpen && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileAboutOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-1 ml-3 pl-3 border-l-2 border-primary/20 space-y-0.5">
                                  {link.dropdownItems?.map((item) => (
                                    <Link
                                      key={item.href}
                                      to={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className={cn(
                                        "block px-3 py-2 text-sm rounded-md transition-colors",
                                        location.pathname === item.href
                                          ? "text-primary bg-primary/5"
                                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                      )}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                            location.pathname === link.href
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.03 }}
                    className="pt-3"
                  >
                    <Button variant="hero" size="xl" className="w-full" asChild>
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Mega Menu */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
    </>
  );
}