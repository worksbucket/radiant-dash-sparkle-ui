
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import SummaryChart from '@/components/dashboard/SummaryChart';
import { Users, ShoppingCart, CreditCard, BarChart3, ArrowUpRight, Users2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="bg-dashboard-purple hover:bg-dashboard-purple/90">
          <ArrowUpRight className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Users" 
          value="8,249" 
          description="+12% from last month" 
          icon={Users} 
          color="purple" 
        />
        <StatCard 
          title="Active Orders" 
          value="412" 
          description="21 pending approvals" 
          icon={ShoppingCart} 
          color="blue" 
        />
        <StatCard 
          title="Total Revenue" 
          value="$48,592" 
          description="+8.2% from last month" 
          icon={CreditCard} 
          color="green" 
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.24%" 
          description="+1.2% from last week" 
          icon={BarChart3} 
          color="orange" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <SummaryChart />
        </div>
        <div>
          <RecentActivityCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="dashboard-card col-span-1 md:col-span-2 lg:col-span-2 h-[120px]">
          <CardContent className="flex items-center justify-between h-full p-6">
            <div>
              <h3 className="text-lg font-semibold">Weekly Report</h3>
              <p className="text-muted-foreground">Updated insights ready to view</p>
            </div>
            <Button className="bg-dashboard-blue hover:bg-dashboard-blue/90">
              View Report
            </Button>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card col-span-1 md:col-span-1 lg:col-span-1 h-[120px]">
          <CardContent className="flex items-center justify-between h-full p-6">
            <div>
              <h3 className="text-lg font-semibold">Team</h3>
              <p className="text-muted-foreground">24 members</p>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-muted flex items-center justify-center ring-2 ring-background">
                  <Users2 className="h-4 w-4" />
                </div>
              ))}
              <div className="h-8 w-8 rounded-full bg-dashboard-pink text-white flex items-center justify-center ring-2 ring-background">
                <span className="text-xs">+21</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card col-span-1 md:col-span-1 lg:col-span-1 h-[120px]">
          <CardContent className="flex items-center justify-between h-full p-6">
            <div>
              <h3 className="text-lg font-semibold">Notifications</h3>
              <p className="text-muted-foreground">12 unread messages</p>
            </div>
            <Button variant="outline">View All</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
