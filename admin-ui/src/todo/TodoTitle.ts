import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "id";

export const TodoTitle = (record: TTodo): string => {
  return record.id || record.id;
};
