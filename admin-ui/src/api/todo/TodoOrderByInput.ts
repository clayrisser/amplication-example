import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  createdAt?: SortOrder;
  hello?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
