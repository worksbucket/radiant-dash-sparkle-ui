
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Calendar,
  Inbox,
  Bell,
  Component
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/', active: window.location.pathname === '/' },
  { icon: Users, label: 'Users', path: '/users', active: window.location.pathname === '/users' },
  { icon: Component, label: 'Components', path: '/components', active: window.location.pathname === '/components' },
  { icon: ShoppingCart, label: 'Products', path: '#', active: false },
  { icon: BarChart3, label: 'Analytics', path: '#', active: false },
  { icon: Calendar, label: 'Calendar', path: '#', active: false },
  { icon: Inbox, label: 'Messages', path: '#', active: false },
  { icon: Bell, label: 'Notifications', path: '#', active: false },
];

interface SidebarMainNavProps {
  collapsed: boolean;
}

const SidebarMainNav: React.FC<SidebarMainNavProps> = ({ collapsed }) => (
  <>
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
  </>
);

export default SidebarMainNav;
