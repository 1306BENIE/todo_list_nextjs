"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getTodos, updateTodo } from "@/gateways/todo";
import { ITodo } from "@/interfaces/Todo";
import TodoForm from "@/components/TodoForm/TodoForm";

export default function UpdateTaskPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const id = idParam ? parseInt(idParam, 10) : null;

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<ITodo["completed"]>("En cours");

  useEffect(() => {
    if (!id) return;
    const todo = getTodos().find((t) => t.id === id);
    if (todo) {
      setTitle(todo.title);
      setStatus(todo.completed);
    } else {
      router.push("/tasks");
    }
  }, [id, router]);

  const handleUpdate = () => {
    if (!id || !title.trim()) return;

    updateTodo(id, title, status);
    router.push("/tasks");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <TodoForm
        title={title}
        status={status}
        setTitle={setTitle}
        setStatus={setStatus}
        onSubmit={handleUpdate}
      />
    </div>
  );
}
