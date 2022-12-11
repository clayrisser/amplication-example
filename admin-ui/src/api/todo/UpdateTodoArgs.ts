import { TodoWhereUniqueInput } from "./TodoWhereUniqueInput";
import { TodoUpdateInput } from "./TodoUpdateInput";

export type UpdateTodoArgs = {
  where: TodoWhereUniqueInput;
  data: TodoUpdateInput;
};
