
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarAuthMenuProps {
  collapsed: boolean;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

const SidebarAuthMenu: React.FC<SidebarAuthMenuProps> = ({
  collapsed,
  open,
  onOpenChange,
}) => (
  <Collapsible open={open} onOpenChange={onOpenChange} className="w-full">
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
                open && "transform rotate-180"
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
);

export default SidebarAuthMenu;
