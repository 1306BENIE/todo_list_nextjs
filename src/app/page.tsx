import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardInfo from "@/components/DashboardInfo/DashboardInfo";

export default function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <main className="sm:ml-64 w-full p-4 sm:p-6">
        <DashboardInfo />
      </main>
    </div>
  );
}
