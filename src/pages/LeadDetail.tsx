
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Edit, Files, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import LeadSidebar from "@/components/leads/LeadSidebar";
import ActivityTab from "@/components/leads/ActivityTab";
import EmailsTab from "@/components/leads/EmailsTab";
import SmsTab from "@/components/leads/SmsTab";
import DocumentsTab from "@/components/leads/DocumentsTab";

const LeadDetail = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState<Date | undefined>(new Date());
  const [note, setNote] = useState("");
  const [activeTab, setActiveTab] = useState("activities");

  // Dummy lead data
  const leadData = {
    id: 1,
    name: "John Behr",
    email: "info@email.com",
    phone: "",
    owner: "Ahmad",
    status: "New",
    source: "LinkedIn",
    pipeline: "-",
    pipelineStage: "-",
    tags: ["USA"],
    lastActivity: "2 hours ago",
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleSaveNote = () => {
    // TODO: Save note logic
    console.log("Saving note:", note);
    setNote("");
  };

  const handleAddEvent = () => {
    // TODO: Add event logic
    console.log("Adding event for date:", currentDate);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        {/* Left Panel - Lead Information */}
        <div className="md:col-span-1">
          <LeadSidebar lead={leadData} />
        </div>

        {/* Right Panel - Notes, Activities, Calendar */}
        <div className="md:col-span-2 space-y-6">
          {/* Notes Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Textarea 
                  placeholder="Enter notes, comments, memories..." 
                  className="resize-none min-h-[120px]"
                  value={note}
                  onChange={handleNoteChange}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSaveNote}>Save</Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Card>
            <CardContent className="pt-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="activities">
                    Activities
                  </TabsTrigger>
                  <TabsTrigger value="emails">
                    Emails
                  </TabsTrigger>
                  <TabsTrigger value="sms">
                    SMS <Badge className="ml-1 bg-primary">3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="documents">
                    Documents
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="activities">
                  <ActivityTab />
                </TabsContent>

                <TabsContent value="emails">
                  <EmailsTab />
                </TabsContent>

                <TabsContent value="sms">
                  <SmsTab />
                </TabsContent>

                <TabsContent value="documents">
                  <DocumentsTab />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Calendar/Event Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-lg font-medium">Events</h3>
              <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600">Add Event</Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <button className="p-2 rounded-full hover:bg-muted"><ArrowLeft size={16} /></button>
                    <span className="font-medium">January 1970</span>
                    <button className="p-2 rounded-full hover:bg-muted">→</button>
                  </div>
                  <CalendarComponent
                    mode="single"
                    selected={currentDate}
                    onSelect={setCurrentDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <button className="p-2 rounded-full hover:bg-muted"><ArrowLeft size={16} /></button>
                    <span className="font-medium">Thursday January 1st, 1970</span>
                    <button className="p-2 rounded-full hover:bg-muted">→</button>
                  </div>
                  <div className="p-4 text-center bg-muted rounded-md h-28 flex items-center justify-center">
                    <p className="text-muted-foreground">No Event</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeadDetail;
