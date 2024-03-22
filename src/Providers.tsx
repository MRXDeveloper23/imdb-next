"use client";

import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
