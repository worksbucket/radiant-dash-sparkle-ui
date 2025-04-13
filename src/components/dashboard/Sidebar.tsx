
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  ChevronLeft,
  ChevronRight,
  Bell,
  Inbox,
  Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/', active: window.location.pathname === '/' },
    { icon: Users, label: 'Users', path: '/users', active: window.location.pathname === '/users' },
    { icon: ShoppingCart, label: 'Products', path: '#', active: false },
    { icon: BarChart3, label: 'Analytics', path: '#', active: false },
    { icon: Calendar, label: 'Calendar', path: '#', active: false },
    { icon: Inbox, label: 'Messages', path: '#', active: false },
    { icon: Bell, label: 'Notifications', path: '#', active: false },
  ];

  const bottomNavItems = [
    { icon: Settings, label: 'Settings', path: '#', active: false },
    { icon: HelpCircle, label: 'Help', path: '#', active: false },
  ];

  return (
    <aside
      className={cn(
        'flex flex-col h-screen bg-sidebar border-r border-border transition-all duration-300 relative',
        collapsed ? 'w-[80px]' : 'w-[250px]',
        className
      )}
    >
      <div className="flex h-14 items-center px-4 border-b border-border">
        {!collapsed && (
          <h1 className="text-xl font-bold text-dashboard-purple">Spectrum</h1>
        )}
        {collapsed && (
          <div className="w-full flex justify-center">
            <div className="h-7 w-7 rounded-md bg-dashboard-purple text-white flex items-center justify-center font-bold">
              S
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, i) => (
            <Button
              key={i}
              variant={item.active ? "secondary" : "ghost"}
              className={cn(
                "justify-start gap-2 h-10",
                item.active && "bg-secondary font-medium"
              )}
              asChild
            >
              <Link to={item.path}>
                <item.icon className={cn("h-5 w-5", item.active ? "text-dashboard-purple" : "text-muted-foreground")} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </div>

      <div className="p-2 mt-auto border-t border-border">
        <nav className="grid gap-1">
          {bottomNavItems.map((item, i) => (
            <Button
              key={i}
              variant="ghost"
              className="justify-start gap-2 h-10"
              asChild
            >
              <Link to={item.path}>
                <item.icon className="h-5 w-5 text-muted-foreground" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 -right-4 h-8 w-8 rounded-full border border-border bg-background"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </aside>
  );
};

export default Sidebar;
