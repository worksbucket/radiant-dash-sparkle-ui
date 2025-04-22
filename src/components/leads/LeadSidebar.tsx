
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Files, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface LeadData {
  id: number;
  name: string;
  email: string;
  phone: string;
  owner: string;
  status: string;
  source: string;
  pipeline: string;
  pipelineStage: string;
  tags: string[];
  lastActivity: string;
}

interface LeadSidebarProps {
  lead: LeadData;
}

const LeadSidebar = ({ lead }: LeadSidebarProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1" 
            onClick={() => navigate('/leads')}
          >
            <ArrowLeft size={16} />
            <span>Back to Leads</span>
          </Button>
        </div>
        <div className="mt-4 mb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{lead.name}</h2>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Edit size={16} className="text-amber-500" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="flex flex-col items-center text-center p-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100">
              <Files size={20} />
            </Button>
            <span className="text-xs mt-1">Files</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100">
              <Mail size={20} />
            </Button>
            <span className="text-xs mt-1">Email</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100">
              <MessageSquare size={20} />
            </Button>
            <span className="text-xs mt-1">SMS</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100">
              <Phone size={20} />
            </Button>
            <span className="text-xs mt-1">Call</span>
          </div>
        </div>

        {/* Last Activity */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">Last Activity</span>
          </div>
          <div className="ml-4 mt-1">
            <span className="text-sm text-muted-foreground">{lead.lastActivity}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 flex items-center">
            Tags
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 ml-1">
              <Edit size={14} className="text-gray-400" />
            </Button>
          </h3>
          <div className="flex flex-wrap gap-2">
            {lead.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Lead Information */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="details">Details <Badge className="ml-1 bg-primary">3</Badge></TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-3">
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.email}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.phone || "-"}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Lead Owner</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.owner}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Lead Status</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.status}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Lead Source</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.source}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Pipeline</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.pipeline}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Pipeline Stage</div>
              <div className="flex items-center justify-between">
                <div className="font-medium">{lead.pipelineStage}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit size={14} className="text-amber-500" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="address">
            <div className="py-4 text-center text-muted-foreground">
              No address information available
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="py-4 text-center text-muted-foreground">
              Additional lead details would be displayed here
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LeadSidebar;
