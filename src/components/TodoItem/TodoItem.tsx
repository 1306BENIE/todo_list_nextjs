"use client";

import { ITodoItemProps } from "@/interfaces/Todo";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoItem({ todo }: ITodoItemProps) {
  const router = useRouter();

  return (
    <tr className="border-t">
      <td className="p-3 sm:p-4 text-sm sm:text-base">{todo.title}</td>
      <td className="p-3 sm:p-4">
        <span
          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
            todo.completed === "Terminée"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {todo.completed}
        </span>
      </td>
      <td className="p-3 sm:p-4 flex gap-2">
        <button
          onClick={() => router.push(`/update-tasks?id=${todo.id}`)}
          className="text-blue-600 cursor-pointer"
        >
          <FaRegEdit className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
        </button>
        <button
          onClick={() => router.push(`/delete-tasks?id=${todo.id}`)}
          className="text-red-600 ml-3 sm:ml-5 cursor-pointer"
        >
          <RiDeleteBin6Line className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
        </button>
      </td>
    </tr>
  );
}
