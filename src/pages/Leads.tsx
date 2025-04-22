
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Leads = () => {
  // Dummy lead data
  const leadsData = [
    { id: 1, name: "John Behr", email: "info@email.com", status: "New", source: "LinkedIn" },
    { id: 2, name: "Sarah Miller", email: "sarah@example.com", status: "Qualified", source: "Website" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com", status: "Contacted", source: "Referral" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", status: "New", source: "Cold Call" },
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Leads</h1>
          <Button className="gap-2">
            <Plus size={16} />
            Add New Lead
          </Button>
        </div>

        <div className="bg-white rounded-md border shadow-sm">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search leads..."
                className="w-full pl-8 bg-background"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Source</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leadsData.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">
                    <Link to={`/lead/${lead.id}`} className="hover:underline text-primary">
                      {lead.name}
                    </Link>
                  </TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.status}</TableCell>
                  <TableCell>{lead.source}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
