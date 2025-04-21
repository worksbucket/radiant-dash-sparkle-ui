
import React from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SmsTab = () => {
  const messages = [
    {
      id: 1,
      content: "Hello, I'm interested in your services.",
      from: "customer",
      timestamp: "2 days ago",
    },
    {
      id: 2,
      content: "Great! Would you like to schedule a call to discuss further?",
      from: "agent",
      timestamp: "2 days ago",
    },
    {
      id: 3,
      content: "Yes, that would be helpful. When are you available?",
      from: "customer",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 max-h-[300px] overflow-y-auto p-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg max-w-[80%] ${
              message.from === "agent"
                ? "bg-primary text-white self-end"
                : "bg-muted self-start"
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-xs opacity-70 block mt-1">{message.timestamp}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-2 border-t">
        <Input placeholder="Type your message..." className="flex-1" />
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default SmsTab;
