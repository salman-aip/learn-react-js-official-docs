export interface TodoProps {
  id: string;
  todoName: string;
  isComplete: boolean;
}

export const ACTIONS = {
  ADD_TODO: "add_todo",
  EDIT_TODO: "edit_todo",
  DELETE_TODO: "delete_todo",
};
