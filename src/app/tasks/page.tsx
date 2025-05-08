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
    <div className="p-8">
      <TodoTitle title="Liste des Tâches" />

      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.push("/create-tasks")}
          className="bg-[#8fdccf] text-[#348bb1] font-bold px-6 py-3 rounded-xl 
            shadow-[4px_4px_0_#348bb1] hover:shadow-[2px_2px_0_#348bb1] 
            active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
            transition-all duration-200 ease-in-out"
        >
          Créer une tâche
        </button>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}
