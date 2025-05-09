import { ITodoListProps } from "@/interfaces/Todo";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos }: ITodoListProps) {
  return (
    <div className="overflow-x-auto shadow-xl rounded-lg">
      <table className="min-w-full bg-white border-separate border-spacing-0 border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-[#a6a9b4] text-white">
            <th className="p-5 text-left text-lg font-semibold">Tâches</th>
            <th className="p-5 text-left text-lg font-semibold">Statut</th>
            <th className="p-5 text-left text-lg font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          ) : (
            <tr>
              <td colSpan={3} className="p-5 text-center text-gray-600">
                Aucune tâche trouvée.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
