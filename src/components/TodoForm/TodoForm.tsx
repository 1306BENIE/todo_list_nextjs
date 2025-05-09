import { useRouter } from "next/navigation";
import { Props, ITodo } from "@/interfaces/Todo";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function TodoForm({
  title,
  status,
  setTitle,
  setStatus,
  onSubmit,
}: Props) {
  const router = useRouter();
  return (
    <div className="space-y-6 p-6 bg-[#e9f3eaac] rounded-2xl shadow-xl border border-gray-200 max-w-xl mx-auto">
      <div className="flex items-center gap-2 justify-center">
        <IoMdArrowRoundBack
          onClick={() => router.push("/tasks")}
          className="w-[25px] h-[25px] text-[#176c17dc] cursor-pointer"
        />
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#176c17dc] to-[#332dea] drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] font-mono tracking-wide">
          Créer / Editer une tâche
        </h1>
      </div>

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
          className="w-full px-4 py-3 bg-[#e9f3efac] border border-gray-300 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none transition duration-200 text-gray-800"
        >
          <option value="En cours"> En cours</option>
          <option value="Terminée">Terminée</option>
        </select>
      </div>

      <button
        onClick={onSubmit}
        className="w-full text-xl bg-[#0dd58c91] hover:bg-[#2BBF7E] text-white font-semibold py-3 rounded-xl shadow-md transition duration-200 
        active:shadow-none active:translate-x-[2px] active:translate-y-[2px] bg-gradient-to-r from-[#8fdccf] to-[#348bb1]
        drop-shadow-[3px_3px_0_rgba(0,0,0,0.4)]"
      >
        Enregistrer la tâche
      </button>
    </div>
  );
}
