
import React from "react";
import { Files } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsTab = () => {
  const documents = [];

  return (
    <div className="p-8 text-center">
      <Files className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
      <h3 className="mt-4 text-lg font-medium">No documents yet</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Upload documents to keep track of important files.
      </p>
      <Button variant="outline" className="mt-4">Upload Document</Button>
    </div>
  );
};

export default DocumentsTab;
