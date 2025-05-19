
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesOverview from "./pages/ServicesOverview";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

// Service Detail Pages
import MaintenanceElectricals from "./pages/services/MaintenanceElectricals";
import InstallationsSmart from "./pages/services/InstallationsSmart";
import RenovationInterior from "./pages/services/RenovationInterior";

// Portfolio Pages
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Service Detail Pages */}
          <Route path="/services/maintenance/electricals" element={<MaintenanceElectricals />} />
          <Route path="/services/installations/smart-tech" element={<InstallationsSmart />} />
          <Route path="/services/renovation/interior" element={<RenovationInterior />} />
          
          {/* Portfolio Pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
