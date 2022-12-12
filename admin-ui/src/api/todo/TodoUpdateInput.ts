import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  hello?: string | null;
  owner?: UserWhereUniqueInput | null;
};
