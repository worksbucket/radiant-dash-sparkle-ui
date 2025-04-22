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
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);
  const [childMenu1Open, setChildMenu1Open] = useState(false);
  const [childMenu2Open, setChildMenu2Open] = useState(false);
  const [componentsMenuOpen, setComponentsMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);

  const componentCategories = [
    {
      label: "Form Elements",
      path: "/components#forms",
      items: [
        { label: "Inputs", path: "/components#forms" },
        { label: "Select", path: "/components#forms" },
        { label: "Checkbox", path: "/components#forms" },
        { label: "Radio", path: "/components#forms" },
        { label: "Switch", path: "/components#forms" },
        { label: "Range", path: "/components#forms" }
      ]
    },
    {
      label: "Layout",
      path: "/components#layout",
      items: [
        { label: "Grid", path: "/components#layout" },
        { label: "Container", path: "/components#layout" },
        { label: "Stack", path: "/components#layout" }
      ]
    },
    {
      label: "Navigation",
      path: "/components#navigation",
      items: [
        { label: "Breadcrumb", path: "/components#navigation" },
        { label: "Menu", path: "/components#navigation" },
        { label: "Tabs", path: "/components#tabs" },
        { label: "Pagination", path: "/components#navigation" }
      ]
    },
    {
      label: "Feedback",
      path: "/components#feedback",
      items: [
        { label: "Alert", path: "/components#feedback" },
        { label: "Toast", path: "/components#feedback" },
        { label: "Progress", path: "/components#feedback" },
        { label: "Spinner", path: "/components#feedback" }
      ]
    },
    {
      label: "Data Display",
      path: "/components#data-display",
      items: [
        { label: "Table", path: "/components#tables" },
        { label: "Badge", path: "/components#badges" },
        { label: "Card", path: "/components#cards" },
        { label: "List", path: "/components#data-display" }
      ]
    },
    {
      label: "Overlays",
      path: "/components#modals",
      items: [
        { label: "Modal", path: "/components#modals" },
        { label: "Popover", path: "/components#modals" },
        { label: "Tooltip", path: "/components#modals" }
      ]
    },
    {
      label: "Typography",
      path: "/components#typography",
      items: [
        { label: "Headings", path: "/components#typography" },
        { label: "Text", path: "/components#typography" },
        { label: "Lists", path: "/components#typography" }
      ]
    }
  ];

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

  const bottomNavItems = [
    { icon: Settings, label: 'Settings', path: '#', active: false },
    { icon: HelpCircle, label: 'Help', path: '#', active: false },
  ];

  // Add the App > CRM > Leads View sidebar structure at the top for better grouping
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
          {/* --- Begin: App > CRM > Leads View --- */}
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>App</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>CRM</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild isActive={window.location.pathname.startsWith('/leads')}>
                            <Link to="/leads">
                              <span>Leads View</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          {/* --- End: App > CRM > Leads View --- */}

          {/* Original sidebar content continues below */}
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
          
          {/* Components Menu with Categories */}
          <Collapsible 
            open={componentsMenuOpen} 
            onOpenChange={setComponentsMenuOpen}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "justify-start w-full gap-2 h-10",
                  window.location.pathname === "/components" && "bg-secondary font-medium"
                )}
              >
                <Component className={cn(
                  "h-5 w-5",
                  window.location.pathname === "/components" ? "text-dashboard-purple" : "text-muted-foreground"
                )} />
                {!collapsed && (
                  <>
                    <span className="flex-grow text-left">Components</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform text-muted-foreground",
                        componentsMenuOpen && "transform rotate-180"
                      )}
                    />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
            
            {!collapsed && (
              <CollapsibleContent className="ml-2 pl-4 border-l border-border">
                {componentCategories.map((category, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="justify-start w-full gap-2 h-9 mt-1"
                      >
                        <List className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-grow text-left text-sm">{category.label}</span>
                        <ChevronDown className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-2 pl-2 border-l border-border">
                      {category.items.map((item, itemIndex) => (
                        <Button
                          key={itemIndex}
                          variant="ghost"
                          className="justify-start w-full gap-2 h-8"
                          asChild
                        >
                          <Link to={item.path}>
                            <List className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs">{item.label}</span>
                          </Link>
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>

          {/* Authentication Menu */}
          <Collapsible 
            open={authMenuOpen} 
            onOpenChange={setAuthMenuOpen}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="justify-start w-full gap-2 h-10"
              >
                <LogIn className="h-5 w-5 text-muted-foreground" />
                {!collapsed && (
                  <>
                    <span className="flex-grow text-left">Authentication</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform text-muted-foreground",
                        authMenuOpen && "transform rotate-180"
                      )}
                    />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
            
            {!collapsed && (
              <CollapsibleContent className="ml-2 pl-4 border-l border-border">
                <Button
                  variant="ghost"
                  className={cn(
                    "justify-start w-full gap-2 h-9 mt-1",
                    window.location.pathname === "/login" && "bg-secondary font-medium"
                  )}
                  asChild
                >
                  <Link to="/login">
                    <LogIn className={cn("h-4 w-4", window.location.pathname === "/login" ? "text-dashboard-purple" : "text-muted-foreground")} />
                    <span className="text-sm">Login</span>
                  </Link>
                </Button>
                
                <Button
                  variant="ghost"
                  className={cn(
                    "justify-start w-full gap-2 h-9",
                    window.location.pathname === "/register" && "bg-secondary font-medium"
                  )}
                  asChild
                >
                  <Link to="/register">
                    <UserPlus className={cn("h-4 w-4", window.location.pathname === "/register" ? "text-dashboard-purple" : "text-muted-foreground")} />
                    <span className="text-sm">Register</span>
                  </Link>
                </Button>
              </CollapsibleContent>
            )}
          </Collapsible>
          
          {/* Demo Menu with Child Menus */}
          <Collapsible 
            open={demoMenuOpen} 
            onOpenChange={setDemoMenuOpen}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="justify-start w-full gap-2 h-10"
              >
                <Menu className="h-5 w-5 text-muted-foreground" />
                {!collapsed && (
                  <>
                    <span className="flex-grow text-left">Demo Menu</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform text-muted-foreground",
                        demoMenuOpen && "transform rotate-180"
                      )}
                    />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
            
            {!collapsed && (
              <CollapsibleContent className="ml-2 pl-4 border-l border-border">
                {/* Child Menu 1 */}
                <Collapsible 
                  open={childMenu1Open} 
                  onOpenChange={setChildMenu1Open}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-9 mt-1"
                    >
                      {childMenu1Open ? <FolderOpen className="h-4 w-4 text-muted-foreground" /> : <Folder className="h-4 w-4 text-muted-foreground" />}
                      <span className="flex-grow text-left text-sm">Child Menu 1</span>
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform text-muted-foreground",
                          childMenu1Open && "transform rotate-180"
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-2 pl-2 border-l border-border">
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-8 mt-1"
                      asChild
                    >
                      <Link to="#">
                        <List className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">Option 1</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-8"
                      asChild
                    >
                      <Link to="#">
                        <List className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">Option 2</span>
                      </Link>
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
                
                {/* Child Menu 2 */}
                <Collapsible 
                  open={childMenu2Open} 
                  onOpenChange={setChildMenu2Open}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-9 mt-1"
                    >
                      {childMenu2Open ? <FolderOpen className="h-4 w-4 text-muted-foreground" /> : <Folder className="h-4 w-4 text-muted-foreground" />}
                      <span className="flex-grow text-left text-sm">Child Menu 2</span>
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform text-muted-foreground",
                          childMenu2Open && "transform rotate-180"
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-2 pl-2 border-l border-border">
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-8 mt-1"
                      asChild
                    >
                      <Link to="#">
                        <List className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">Item A</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-8"
                      asChild
                    >
                      <Link to="#">
                        <List className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">Item B</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start w-full gap-2 h-8"
                      asChild
                    >
                      <Link to="#">
                        <List className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">Item C</span>
                      </Link>
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </CollapsibleContent>
            )}
          </Collapsible>
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
