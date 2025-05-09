"use client";

import { FaHome, FaTasks } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleTasksClick = () => {
    router.push("/tasks");
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="w-60 bg-gradient-to-b from-[#327bac] to-[#55c7ed] text-white h-screen fixed top-0 left-0 shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center  border-white border-b-2">
          Dashboard
        </h2>

        <ul className="space-y-6">
          <li
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleHomeClick}
          >
            <FaHome className="text-2xl" />
            <span>Accueil</span>
          </li>
          <li
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleTasksClick}
          >
            <FaTasks className="text-2xl" />
            <span>Tâches</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
