"use client";

import { Main } from "@/app/_components/main";
import { usePathname } from "next/navigation";
import React from "react";
import PolicySidebar from "./_components/sidebar";

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  // Get the current path to highlight the active link in the sidebar
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <aside className="self-start md:sticky md:top-24">
        <PolicySidebar currentPath={pathname} />
      </aside>
      <Main>{children}</Main>
    </div>
  );
}
