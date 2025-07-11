import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  History,
  Package,
  BarChart3,
  Settings,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Commandes", url: "/commandes", icon: ShoppingCart },
  { title: "Historique des commandes", url: "/historique", icon: History },
  { title: "Produits", url: "/produits", icon: Package },
  { title: "Rapports", url: "/rapports", icon: BarChart3 },
  { title: "Paramètres", url: "/parametres", icon: Settings },
];

interface SomaverSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SomaverSidebar = ({ isOpen, onToggle }: SomaverSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-gradient-somaver transition-transform duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "w-64"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">SOMAVER</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-white hover:bg-white/10 lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white/20 text-white shadow-somaver"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="px-6 py-4 border-t border-white/10">
          <div className="text-xs text-white/60">
            © 2025 SOMAVER Admin
          </div>
        </div>
      </aside>
    </>
  );
};