"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteTodo, getTodos } from "@/gateways/todo";
import { ITodo } from "@/interfaces/Todo";
import { useToast } from "@/components/Toast/useToast";

export default function DeleteTaskPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const id = idParam ? parseInt(idParam, 10) : null;

  const [todo, setTodo] = useState<ITodo | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (!id) return router.push("/tasks");

    const found = getTodos().find((t) => t.id === id);
    if (!found) return router.push("/tasks");
    setTodo(found);
  }, [id, router]);

  const handleConfirm = () => {
    if (!id) return;
    deleteTodo(id);
    showToast("✅ Tâche supprimée avec succès", "success");
    router.push("/tasks");
  };

  const handleCancel = () => {
    router.push("/tasks");
  };

  if (!todo) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-red-600">
          Confirmer la suppression
        </h2>
        <p className="mb-6 text-gray-800">
          Voulez-vous vraiment supprimer la tâche :{" "}
          <span className="font-semibold">{todo.title}</span> ?
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
          >
            Non
          </button>
          <button
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
}
