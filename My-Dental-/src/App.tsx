import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Lenis from "lenis";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import ClinicPage from "@/pages/Clinic";
import DentistsPage from "@/pages/Dentists";
import BlogPage from "@/pages/Blog";
import ContactPage from "@/pages/ContactPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import DentistDetailPage from "@/pages/DentistDetailPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import NotFound from "@/pages/not-found";
import LoadingScreen from "@/components/LoadingScreen";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/:slug" component={ServiceDetailPage} />
      <Route path="/our-clinic" component={ClinicPage} />
      <Route path="/dentists" component={DentistsPage} />
      <Route path="/dentists/:slug" component={DentistDetailPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogDetailPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/contacts" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen />
        <WouterRouter base={((import.meta as any).env?.BASE_URL || "/").replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
