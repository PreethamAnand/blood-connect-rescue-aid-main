
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import DonorSearch from "./pages/DonorSearch";
import BloodRequests from "./pages/BloodRequests";
import Emergency from "./pages/Emergency";
import Hospitals from "./pages/Hospitals";
import Map from "./pages/Map";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/auth/Login";
import HospitalLogin from "./pages/auth/HospitalLogin";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/hospital-login" element={<HospitalLogin />} />
          <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
          
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donor-search" element={<DonorSearch />} />
            <Route path="/blood-requests" element={<BloodRequests />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/map" element={<Map />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
