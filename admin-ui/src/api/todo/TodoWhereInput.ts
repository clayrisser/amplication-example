import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoWhereInput = {
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
};
