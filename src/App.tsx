
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

// Service Category Pages
import Maintenance from "./pages/services/Maintenance";
import Installations from "./pages/services/Installations";
import Renovation from "./pages/services/Renovation";
import PropertyManagement from "./pages/services/PropertyManagement";
import ArchitecturalDesign from "./pages/services/ArchitecturalDesign";

// Maintenance Service Detail Pages
import MaintenanceElectricals from "./pages/services/MaintenanceElectricals";
import PlumbingService from "./pages/services/maintenance/Plumbing";
import CleaningService from "./pages/services/maintenance/Cleaning";
import CarpentryService from "./pages/services/maintenance/Carpentry";
import PaintingService from "./pages/services/maintenance/Painting";

// Installations Service Detail Pages
import InstallationsSmart from "./pages/services/InstallationsSmart";
import SolarPanelsService from "./pages/services/installations/SolarPanels";
import SecuritySystemsService from "./pages/services/installations/SecuritySystems";

// Renovation Service Detail Pages
import RenovationInterior from "./pages/services/RenovationInterior";
import ExteriorRenovationService from "./pages/services/renovation/Exterior";
import GardenRenovationService from "./pages/services/renovation/Garden";
import GreenConstructionService from "./pages/services/renovation/GreenConstruction";

// Property Management Service Detail Pages
import ResidentialPropertyManagementService from "./pages/services/property-management/Residential";
import CommercialPropertyManagementService from "./pages/services/property-management/Commercial";

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
          
          {/* Service Category Pages */}
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/installations" element={<Installations />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/property-management" element={<PropertyManagement />} />
          <Route path="/services/architectural-design" element={<ArchitecturalDesign />} />
          
          {/* Maintenance Service Detail Pages */}
          <Route path="/services/maintenance/electricals" element={<MaintenanceElectricals />} />
          <Route path="/services/maintenance/plumbing" element={<PlumbingService />} />
          <Route path="/services/maintenance/cleaning" element={<CleaningService />} />
          <Route path="/services/maintenance/carpentry" element={<CarpentryService />} />
          <Route path="/services/maintenance/painting" element={<PaintingService />} />
          
          {/* Installations Service Detail Pages */}
          <Route path="/services/installations/smart-tech" element={<InstallationsSmart />} />
          <Route path="/services/installations/solar-panels" element={<SolarPanelsService />} />
          <Route path="/services/installations/security-systems" element={<SecuritySystemsService />} />
          
          {/* Renovation Service Detail Pages */}
          <Route path="/services/renovation/interior" element={<RenovationInterior />} />
          <Route path="/services/renovation/exterior" element={<ExteriorRenovationService />} />
          <Route path="/services/renovation/garden" element={<GardenRenovationService />} />
          <Route path="/services/renovation/green-construction" element={<GreenConstructionService />} />
          
          {/* Property Management Service Detail Pages */}
          <Route path="/services/property-management/residential" element={<ResidentialPropertyManagementService />} />
          <Route path="/services/property-management/commercial" element={<CommercialPropertyManagementService />} />
          
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
