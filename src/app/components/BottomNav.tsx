import { Link, useLocation } from "react-router";
import { Home, FileText, Upload, BarChart3, Settings } from "lucide-react";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/ledger", icon: FileText, label: "Ledger" },
    { path: "/import", icon: Upload, label: "Import" },
    { path: "/analytics", icon: BarChart3, label: "Analytics" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[412px] mx-auto h-[80px] bg-card border-t border-border px-4 flex items-center justify-around">
      {navItems.map((item) => {
        const active = isActive(item.path);
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center gap-1 min-w-[60px]"
          >
            <Icon
              size={24}
              className={active ? "text-primary" : "text-muted-foreground"}
            />
            <span
              className={`text-xs ${
                active ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
