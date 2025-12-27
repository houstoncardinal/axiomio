import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <SEOHead
        title="Page Not Found | 404 Error | AXIOMIO"
        description="The page you're looking for doesn't exist or has been moved. Return to AXIOMIO homepage for enterprise technology consulting, Xops360 platform, and digital transformation services."
        noIndex={true}
        pageType="error"
      />
      <div className="text-center px-6">
        <div className="mb-8">
          <span className="text-8xl font-heading font-bold text-gradient">404</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
