import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  owner?: UserWhereUniqueInput | null;
};
