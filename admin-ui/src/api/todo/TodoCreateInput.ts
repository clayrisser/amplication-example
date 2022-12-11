import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  owner?: UserWhereUniqueInput | null;
};
