import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoWhereInput = {
  hello?: StringNullableFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
};
