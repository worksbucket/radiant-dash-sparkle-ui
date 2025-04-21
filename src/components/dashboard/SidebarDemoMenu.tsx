
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Folder, FolderOpen, List } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarDemoMenuProps {
  collapsed: boolean;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  childMenu1Open: boolean;
  onChildMenu1OpenChange: (open: boolean) => void;
  childMenu2Open: boolean;
  onChildMenu2OpenChange: (open: boolean) => void;
}

const SidebarDemoMenu: React.FC<SidebarDemoMenuProps> = ({
  collapsed,
  open,
  onOpenChange,
  childMenu1Open,
  onChildMenu1OpenChange,
  childMenu2Open,
  onChildMenu2OpenChange,
}) => (
  <Collapsible open={open} onOpenChange={onOpenChange} className="w-full">
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
                open && "transform rotate-180"
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
          onOpenChange={onChildMenu1OpenChange}
          className="w-full"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="justify-start w-full gap-2 h-9 mt-1"
            >
              {childMenu1Open
                ? <FolderOpen className="h-4 w-4 text-muted-foreground" />
                : <Folder className="h-4 w-4 text-muted-foreground" />}
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
          onOpenChange={onChildMenu2OpenChange}
          className="w-full"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="justify-start w-full gap-2 h-9 mt-1"
            >
              {childMenu2Open
                ? <FolderOpen className="h-4 w-4 text-muted-foreground" />
                : <Folder className="h-4 w-4 text-muted-foreground" />}
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
);

export default SidebarDemoMenu;
