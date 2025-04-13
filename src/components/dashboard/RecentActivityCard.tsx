
import React from 'react';
import { cn } from '@/lib/utils';
import { MoreHorizontal, User, ShoppingCart, CreditCard, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
  id: number;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  timestamp: string;
  icon: 'user' | 'cart' | 'payment' | 'message';
};

const getIcon = (icon: ActivityItem['icon']) => {
  switch (icon) {
    case 'user':
      return <User className="h-4 w-4" />;
    case 'cart':
      return <ShoppingCart className="h-4 w-4" />;
    case 'payment':
      return <CreditCard className="h-4 w-4" />;
    case 'message':
      return <Mail className="h-4 w-4" />;
  }
};

const activities: ActivityItem[] = [
  {
    id: 1,
    user: {
      name: "Alex Morgan",
      initials: "AM"
    },
    action: "created a new account",
    timestamp: "2 minutes ago",
    icon: 'user'
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      initials: "SC"
    },
    action: "purchased Premium Plan",
    timestamp: "45 minutes ago",
    icon: 'payment'
  },
  {
    id: 3,
    user: {
      name: "David Kim",
      initials: "DK"
    },
    action: "added 3 products to cart",
    timestamp: "1 hour ago",
    icon: 'cart'
  },
  {
    id: 4,
    user: {
      name: "Olivia Wang",
      initials: "OW"
    },
    action: "sent a support message",
    timestamp: "3 hours ago",
    icon: 'message'
  }
];

type RecentActivityCardProps = {
  className?: string;
};

const RecentActivityCard = ({ className }: RecentActivityCardProps) => {
  return (
    <Card className={cn('dashboard-card', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
          <CardDescription>Latest user actions</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback className="bg-secondary text-secondary-foreground">{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                  {getIcon(activity.icon)}
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
