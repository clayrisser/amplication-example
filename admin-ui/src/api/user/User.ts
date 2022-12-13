import { JsonValue } from "type-fest";
import { Todo } from "../todo/Todo";

export type User = {
  birthday: Date | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  todos?: Array<Todo>;
  updatedAt: Date;
  username: string;
};
