import { ITodo } from "@/interfaces/Todo";

interface Props {
  title: string;
  status: ITodo["completed"];
  setTitle: (value: string) => void;
  setStatus: (value: ITodo["completed"]) => void;
  onSubmit: () => void;
}

export default function TodoForm({
  title,
  status,
  setTitle,
  setStatus,
  onSubmit,
}: Props) {
  return (
    <div className="space-y-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Editer une Tâche
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Titre de la tâche
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Lire un livre"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none transition duration-200 text-gray-800"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Statut
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ITodo["completed"])}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-200 text-gray-800 bg-white"
        >
          <option value="En cours"> En cours</option>
          <option value="Terminée">Terminée</option>
        </select>
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
      >
        Enregistrer la tâche
      </button>
    </div>
  );
}
