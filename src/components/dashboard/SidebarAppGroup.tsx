
import React from 'react';
import { Link } from 'react-router-dom';
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

const SidebarAppGroup = () => (
  <ShadcnSidebar>
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
  </ShadcnSidebar>
);

export default SidebarAppGroup;
