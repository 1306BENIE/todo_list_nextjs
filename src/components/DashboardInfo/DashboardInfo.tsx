"use client";
import { useEffect, useState } from "react";
import { ITodo } from "@/interfaces/Todo";
import { getTodos } from "@/gateways/todo";

import {
  IoIosCheckmarkCircle,
  IoIosHourglass,
  IoIosAlarm,
} from "react-icons/io";
import { FaTasks, FaClipboardCheck } from "react-icons/fa";

export default function DashboardInfo() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    const todos = getTodos();
    setTodoList(todos);
  }, []);

  const total = todoList.length;
  const completed = todoList.filter((t) => t.completed === "Terminée").length;
  const ongoing = todoList.filter((t) => t.completed === "En cours").length;
  const newTasks = todoList.filter((t) => Date.now() - t.id < 86400000).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 mt-18 sm:mt-0">
        {/* Carte Tâches Totales */}
        <div className="bg-gradient-to-r from-[#eefcf1] to-[#efedfac4] text-[#5c5a5a] p-4 sm:p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-xl font-bold">Tâches Totales</h3>
            <p className="text-xl sm:text-2xl mt-2">{total}</p>
          </div>
          <span className="w-[32px] h-[40px] sm:w-[40px] sm:h-[48px] rounded-full bg-[#2f9d45] flex items-center justify-center text-white">
            <FaTasks className="text-lg sm:text-xl" />
          </span>
        </div>

        {/* Carte Tâches Terminées */}
        <div className="bg-gradient-to-r from-[#eef2fb] to-[#eef3fc] text-[#5c5a5a] p-4 sm:p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-xl font-bold">Tâches Terminées</h3>
            <p className="text-xl sm:text-2xl mt-2">{completed}</p>
          </div>
          <span className="w-[32px] h-[40px] sm:w-[40px] sm:h-[48px] rounded-full bg-[#3b82f6] flex items-center justify-center text-white">
            <FaClipboardCheck className="text-lg sm:text-xl" />
          </span>
        </div>

        {/* Carte Tâches En Cours */}
        <div className="bg-gradient-to-r from-[#eef8f5] to-[#f1fcfb] text-[#5c5a5a] p-4 sm:p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-xl font-bold">Tâches En Cours</h3>
            <p className="text-xl sm:text-2xl mt-2">{ongoing}</p>
          </div>
          <span className="w-[32px] h-[40px] sm:w-[40px] sm:h-[48px] rounded-full bg-[#0defb3] flex items-center justify-center text-white">
            <IoIosHourglass className="text-lg sm:text-xl" />
          </span>
        </div>

        {/* Carte Progrès */}
        <div className="bg-gradient-to-r from-[#f4f1fa] to-[#f9f0f4] text-[#5c5a5a] p-4 sm:p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-xl font-bold">Progrès de la Journée</h3>
            <p className="text-xl sm:text-2xl mt-2">{progress}%</p>
          </div>
          <span className="w-[32px] h-[40px] sm:w-[40px] sm:h-[48px] rounded-full bg-[#f7047e] flex items-center justify-center text-white">
            <IoIosCheckmarkCircle className="text-lg sm:text-xl" />
          </span>
        </div>

        {/* Carte Nouvelles Tâches */}
        <div className="bg-gradient-to-r from-[#f0fbfc] to-[#fdf8f0] text-[#5c5a5a]] p-4 sm:p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-xl font-bold">Nouvelle Tâche</h3>
            <p className="text-xl sm:text-2xl mt-2">{newTasks}</p>
          </div>
          <span className="w-[32px] h-[40px] sm:w-[40px] sm:h-[48px] rounded-full bg-[#f2963a] flex items-center justify-center text-white">
            <IoIosAlarm className="text-lg sm:text-xl" />
          </span>
        </div>
      </div>

      {/* Liste des tâches */}
      <div className="overflow-x-auto shadow-xl rounded-lg px-4 sm:px-6 mt-4 sm:mt-6">
        <table className="min-w-full bg-white border-separate border-spacing-0 border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-[#a6a9b4] text-white">
              <th className="p-3 sm:p-5 text-left text-base sm:text-lg font-semibold">Tâches</th>
              <th className="p-3 sm:p-5 text-left text-base sm:text-lg font-semibold">Statut</th>
            </tr>
          </thead>
          <tbody>
            {todoList.length > 0 ? (
              todoList.map((todo) => (
                <tr key={todo.id}>
                  <td className="p-3 sm:p-5 text-sm sm:text-base">{todo.title}</td>
                  <td className="p-3 sm:p-5 text-sm sm:text-base">
                    {todo.completed}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="p-3 sm:p-5 text-center text-sm sm:text-base text-gray-600">
                  Aucune tâche trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
