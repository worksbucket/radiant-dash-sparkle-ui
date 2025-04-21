
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Component, ChevronDown, List } from "lucide-react";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarComponentsMenuProps {
  collapsed: boolean;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

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

const SidebarComponentsMenu: React.FC<SidebarComponentsMenuProps> = ({
  collapsed,
  open,
  onOpenChange,
}) => (
  <Collapsible open={open} onOpenChange={onOpenChange} className="w-full">
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
                open && "transform rotate-180"
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
);

export default SidebarComponentsMenu;
