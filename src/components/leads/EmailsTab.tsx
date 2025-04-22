
import React from "react";
import { Mail } from "lucide-react";

const EmailsTab = () => {
  const emails = [];

  return (
    <div className="p-8 text-center">
      <Mail className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
      <h3 className="mt-4 text-lg font-medium">No emails yet</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        When you send or receive emails, they will appear here.
      </p>
    </div>
  );
};

export default EmailsTab;
