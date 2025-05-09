"use client";

import { ITodo } from "@/interfaces/Todo";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TodoForm from "@/components/TodoForm/TodoForm";
import { Suspense } from "react";

function UpdateTaskContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<ITodo["completed"]>("En cours");

  useEffect(() => {
    if (!id) return;
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const todo = todos.find((t: ITodo) => t.id === Number(id));
    if (todo) {
      setTitle(todo.title);
      setStatus(todo.completed);
    }
  }, [id]);

  const handleUpdate = () => {
    if (!id) return;
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const updatedTodos = todos.map((todo: ITodo) =>
      todo.id === Number(id) ? { ...todo, title, completed: status } : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    router.push("/tasks");
  };

  return (
    <TodoForm
      title={title}
      completed={status}
      setTitle={setTitle}
      setStatus={setStatus}
      onSubmit={handleUpdate}
      mode="edit"
    />
  );
}

export default function UpdateTask() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateTaskContent />
    </Suspense>
  );
}
