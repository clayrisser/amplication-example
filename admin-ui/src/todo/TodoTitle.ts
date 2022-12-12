import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "hello";

export const TodoTitle = (record: TTodo): string => {
  return record.hello || record.id;
};
