import { useState, ReactNode } from "react";
import { SomaverSidebar } from "./SomaverSidebar";
import { SomaverTopbar } from "./SomaverTopbar";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SomaverSidebar isOpen={sidebarOpen} onToggle={handleCloseSidebar} />
      
      <div className="lg:pl-64">
        <SomaverTopbar onMenuToggle={handleMenuToggle} title={title} />
        
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};