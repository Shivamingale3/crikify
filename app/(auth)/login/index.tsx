import RootLayout from "@/components/ui/RootLayout";
import React from "react";
import MobileNumberForm from "./MobileNumberForm";

export default function index() {
  return (
    <RootLayout className="h-full items-center justify-center">
      <MobileNumberForm />
    </RootLayout>
  );
}
