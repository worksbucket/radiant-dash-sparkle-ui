
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  UserPlus, 
  Search, 
  Filter, 
  MoreHorizontal 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample user data
const users = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
  { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Editor', status: 'Active', lastActive: '1 day ago' },
  { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Viewer', status: 'Inactive', lastActive: '5 days ago' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor', status: 'Active', lastActive: '3 hours ago' },
  { id: 5, name: 'David Wilson', email: 'david@example.com', role: 'Admin', status: 'Active', lastActive: 'Just now' },
  { id: 6, name: 'Jessica Taylor', email: 'jessica@example.com', role: 'Viewer', status: 'Active', lastActive: '1 hour ago' },
  { id: 7, name: 'Ryan Miller', email: 'ryan@example.com', role: 'Editor', status: 'Inactive', lastActive: '2 weeks ago' },
  { id: 8, name: 'Olivia Moore', email: 'olivia@example.com', role: 'Viewer', status: 'Active', lastActive: '4 days ago' },
];

const Users = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Users Management</h1>
          <p className="text-muted-foreground">Manage your team members and their account permissions</p>
        </div>
        <Button className="bg-dashboard-purple hover:bg-dashboard-purple/90">
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="bg-white rounded-lg border p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-8" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline">Role</Button>
            <Button variant="outline">Status</Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of users in your organization.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Admin' 
                        ? 'bg-dashboard-purple/10 text-dashboard-purple' 
                        : user.role === 'Editor' 
                          ? 'bg-dashboard-blue/10 text-dashboard-blue' 
                          : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
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

export default Users;
