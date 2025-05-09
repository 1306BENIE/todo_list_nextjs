import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardInfo from "@/components/DashboardInfo/DashboardInfo";

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-6">
        <DashboardInfo />
      </main>
    </div>
  );
}
