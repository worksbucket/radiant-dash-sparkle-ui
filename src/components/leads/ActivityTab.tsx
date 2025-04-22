
import React from "react";
import { CalendarClock } from "lucide-react";

const ActivityTab = () => {
  // Placeholder for activities
  const activities = [
    {
      id: 1,
      type: "Note",
      content: "Called the lead to discuss their requirements.",
      date: "Today at 2:30 PM",
    },
    {
      id: 2,
      type: "Email",
      content: "Sent follow-up email with product information.",
      date: "Yesterday at 4:15 PM",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.length > 0 ? (
        activities.map((activity) => (
          <div key={activity.id} className="p-4 border rounded-md">
            <div className="flex justify-between items-start">
              <div className="font-medium">{activity.type}</div>
              <div className="text-sm text-muted-foreground">{activity.date}</div>
            </div>
            <p className="mt-2 text-sm">{activity.content}</p>
          </div>
        ))
      ) : (
        <div className="p-8 text-center">
          <CalendarClock className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
          <h3 className="mt-4 text-lg font-medium">No activities yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            When you add activities, they will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivityTab;
