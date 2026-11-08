"use client";

import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";

export function ToastDemoButton() {
  return (
    <Button variant="outline" onClick={() => toast.success("Hello from react-hot-toast!")}>
      Show toast
    </Button>
  );
}