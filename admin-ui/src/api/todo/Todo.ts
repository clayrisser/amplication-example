import { User } from "../user/User";

export type Todo = {
  createdAt: Date;
  id: string;
  owner?: User | null;
  updatedAt: Date;
};
