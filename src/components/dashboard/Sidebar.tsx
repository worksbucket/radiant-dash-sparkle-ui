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
  Calendar,
  Menu,
  ChevronDown,
  Folder,
  FolderOpen,
  List,
  Component,
  LogIn,
  UserPlus
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import SidebarAppGroup from './SidebarAppGroup';
import SidebarMainNav from './SidebarMainNav';
import SidebarComponentsMenu from './SidebarComponentsMenu';
import SidebarAuthMenu from './SidebarAuthMenu';
import SidebarDemoMenu from './SidebarDemoMenu';

type SidebarProps = {
  className?: string;
};

const DashboardSidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [componentsMenuOpen, setComponentsMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);
  const [childMenu1Open, setChildMenu1Open] = useState(false);
  const [childMenu2Open, setChildMenu2Open] = useState(false);

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
          <SidebarAppGroup />

          <SidebarMainNav collapsed={collapsed} />

          <SidebarComponentsMenu
            collapsed={collapsed}
            open={componentsMenuOpen}
            onOpenChange={setComponentsMenuOpen}
          />

          <SidebarAuthMenu
            collapsed={collapsed}
            open={authMenuOpen}
            onOpenChange={setAuthMenuOpen}
          />

          <SidebarDemoMenu
            collapsed={collapsed}
            open={demoMenuOpen}
            onOpenChange={setDemoMenuOpen}
            childMenu1Open={childMenu1Open}
            onChildMenu1OpenChange={setChildMenu1Open}
            childMenu2Open={childMenu2Open}
            onChildMenu2OpenChange={setChildMenu2Open}
          />
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

export default DashboardSidebar;
