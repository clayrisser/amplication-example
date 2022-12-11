import { TodoWhereInput } from "./TodoWhereInput";

export type TodoListRelationFilter = {
  every?: TodoWhereInput;
  some?: TodoWhereInput;
  none?: TodoWhereInput;
};
