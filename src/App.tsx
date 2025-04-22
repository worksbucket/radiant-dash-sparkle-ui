import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Components from "./pages/Components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Leads from "./pages/Leads";
import LeadDetail from "./pages/LeadDetail";
import ChatWidget from "@/components/ChatWidget";
import Kanban from "./pages/Kanban";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ChatWidget />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/users" element={<Users />} />
          <Route path="/components" element={<Components />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/lead/:id" element={<LeadDetail />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
