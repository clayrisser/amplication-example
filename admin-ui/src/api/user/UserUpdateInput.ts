import { InputJsonValue } from "../../types";
import { TodoUpdateManyWithoutUsersInput } from "./TodoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  todos?: TodoUpdateManyWithoutUsersInput;
  username?: string;
};
