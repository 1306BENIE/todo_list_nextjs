"use client";

import Sidebar from "@/components/Sidebar/Sidebar";

export default function CreateTasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[250px] flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto flex items-center justify-center">
        <div className="w-full p-4 sm:p-8 pl-12 sm:pl-16 lg:pl-24">
          {children}
        </div>
      </div>
    </div>
  );
}
