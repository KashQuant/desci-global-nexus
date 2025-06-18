
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import HealthMedicine from "./pages/pillars/HealthMedicine";
import ClimateEnvironment from "./pages/pillars/ClimateEnvironment";
import OpenAccessPublishing from "./pages/pillars/OpenAccessPublishing";
import DesciInfrastructure from "./pages/pillars/DesciInfrastructure";
import AiEthics from "./pages/pillars/AiEthics";
import CitizenScience from "./pages/pillars/CitizenScience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/pillars/health-medicine" element={<HealthMedicine />} />
          <Route path="/pillars/climate-environment" element={<ClimateEnvironment />} />
          <Route path="/pillars/open-access-publishing" element={<OpenAccessPublishing />} />
          <Route path="/pillars/desci-infrastructure" element={<DesciInfrastructure />} />
          <Route path="/pillars/ai-ethics" element={<AiEthics />} />
          <Route path="/pillars/citizen-science" element={<CitizenScience />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
