// app/tasks/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getTodos } from "@/gateways/todo";
import { ITodo } from "@/interfaces/Todo";
import TodoTitle from "@/components/TodoTitle/TodoTitle";
import TodoList from "@/components/TodoList/TodoList";
import { useRouter } from "next/navigation";

export default function TasksPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const router = useRouter();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <TodoTitle title="Liste des Tâches" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-4">
        <button
          onClick={() => router.push("/")}
          className="w-full sm:w-auto bg-gray-200 text-gray-700 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl 
          shadow-[4px_4px_0_#aaa] hover:shadow-[2px_2px_0_#aaa] 
          active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
          transition-all duration-200 ease-in-out text-sm sm:text-base"
        >
          Retour
        </button>

        <button
          onClick={() => router.push("/create-tasks")}
          className="w-full sm:w-auto bg-[#8fdccf] text-[#348bb1] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl 
          shadow-[4px_4px_0_#348bb1] hover:shadow-[2px_2px_0_#348bb1] 
          active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
          transition-all duration-200 ease-in-out text-sm sm:text-base"
        >
          Créer une tâche
        </button>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}
