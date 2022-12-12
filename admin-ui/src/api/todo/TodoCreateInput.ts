import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  hello?: string | null;
  owner?: UserWhereUniqueInput | null;
};
