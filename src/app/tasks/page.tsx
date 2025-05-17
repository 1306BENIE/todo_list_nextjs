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
    <div className="p-4 sm:p-8 pl-12 sm:pl-16 lg:pl-24">
      <TodoTitle title="Liste des Tâches" />

      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.push("/create-tasks")}
          className="bg-[#8fdccf] text-[#fff] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl 
          shadow-[4px_4px_0_#348bb1] hover:shadow-[2px_2px_0_#348bb1] 
          active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
          transition-all duration-200 ease-in-out text-sm sm:text-base mr-4 sm:mr-6 lg:mr-12"
        >
          Créer une tâche
        </button>
      </div>

      <div className="w-full max-w-[1400px] -ml-4 sm:-ml-6 lg:-ml-12">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
