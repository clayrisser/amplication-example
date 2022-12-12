import { User } from "../user/User";

export type Todo = {
  createdAt: Date;
  hello: string | null;
  id: string;
  owner?: User | null;
  updatedAt: Date;
};
