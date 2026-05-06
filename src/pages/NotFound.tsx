import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
  useSEO("Page Not Found", "The page you are looking for could not be found.");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-display font-bold text-foreground">404</h1>
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
