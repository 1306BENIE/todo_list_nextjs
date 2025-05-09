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
    <div className="w-full sm:w-60 bg-gradient-to-b from-[#327bac] to-[#55c7ed] text-white h-auto sm:h-screen fixed sm:fixed top-0 left-0 shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center border-white border-b-2">
          Dashboard
        </h2>

        <ul className="flex sm:block justify-around sm:justify-start space-y-0 sm:space-y-6">
          <li
            className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
            onClick={handleHomeClick}
          >
            <FaHome className="text-xl sm:text-2xl" />
            <span className="text-sm sm:text-base">Accueil</span>
          </li>
          <li
            className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
            onClick={handleTasksClick}
          >
            <FaTasks className="text-xl sm:text-2xl" />
            <span className="text-sm sm:text-base">Tâches</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
