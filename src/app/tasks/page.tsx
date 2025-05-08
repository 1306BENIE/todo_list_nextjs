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
          className="bg-[#8fdccf] hover:bg-[#8fdccf]/50 text-[#348bb1] font-semibold px-4 py-2 rounded-xl transition"
        >
          Créer une tâche
        </button>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}
