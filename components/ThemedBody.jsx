'use client';
import React from "react";
import { useProvider } from "@/app/Provider";
export default function ThemedBody({ children }) {
  const { theme } = useProvider();
  return (
    <body className={`md:w-3/4 mx-auto md:my-20 ${theme ? "dark" : "light"}`}>
      {children}
    </body>
  );
}
