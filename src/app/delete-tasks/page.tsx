"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteTodo, getTodos } from "@/gateways/todo";
import { ITodo } from "@/interfaces/Todo";
import { useToast } from "@/components/Toast/useToast";
import { Suspense } from "react";

function DeleteTaskContent() {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600">
          Confirmer la suppression
        </h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-800">
          Voulez-vous vraiment supprimer la tâche :{" "}
          <span className="font-semibold">{todo.title}</span> ?
        </p>

        <div className="flex justify-end gap-3 sm:gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base"
          >
            Non
          </button>
          <button
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base"
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DeleteTask() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeleteTaskContent />
    </Suspense>
  );
}
