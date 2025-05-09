export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface Props {
  title: string;
  status: ITodo["completed"];
  setTitle: (value: string) => void;
  setStatus: (value: ITodo["completed"]) => void;
  onSubmit: () => void;
}

export interface ITodoListProps {
  todos: ITodo[];
}

export interface ITodoItemProps {
  todo: ITodo;
}

export interface DashboardProps {
  todos: ITodo[];
}
