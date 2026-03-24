import { useLocation, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        canonical={`${seoConfig.siteUrl}${location.pathname}`}
        noIndex
      />
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-display font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground font-body">Page not found</p>
          <Link to="/" className="text-primary underline hover:text-primary/90 font-body">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
