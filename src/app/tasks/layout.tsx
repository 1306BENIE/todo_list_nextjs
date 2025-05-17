"use client";

import Sidebar from "@/components/Sidebar/Sidebar";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[200px] flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-4 sm:p-8 pl-12 sm:pl-16 lg:pl-24">{children}</div>
      </div>
    </div>
  );
}
