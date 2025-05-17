"use client";

import TodoForm from "@/components/TodoForm/TodoForm";
import { useRouter } from "next/navigation";
import { addTodo } from "@/gateways/todo";
import { useState } from "react";
import { ITodo } from "@/interfaces/Todo";

export default function CreateTaskPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<ITodo["completed"]>("En cours");

  const handleAdd = () => {
    if (!title.trim()) return;

    addTodo(title, status);
    router.push("/tasks");
  };

  return (
    <div className="max-w-xl w-full mx-auto">
      <TodoForm
        title={title}
        completed={status}
        setTitle={setTitle}
        setStatus={setStatus}
        onSubmit={handleAdd}
        mode="create"
      />
    </div>
  );
}
