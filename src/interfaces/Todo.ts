type TStatus = "En cours" | "Terminée";

export interface ITodo {
  id: number;
  title: string;
  completed: TStatus;
}

export interface ITodoItemProps {
  todo: ITodo;
}

export interface ITodoFormProps {
  title: string;
  completed: ITodo["completed"];
  setTitle: (value: string) => void;
  setStatus: (value: ITodo["completed"]) => void;
  onSubmit: () => void;
  mode: "create" | "edit";
}

export interface ITodoListProps {
  todos: ITodo[];
}

export interface DashboardProps {
  todos: ITodo[];
}
