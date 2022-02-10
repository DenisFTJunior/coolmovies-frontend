import { assoc, compose, dissoc, pick } from "ramda";

export const cleanRequest = compose(
  pick(["filter", "orderBy", "offset"]),

  (item: any) =>
    item && item.filter
      ? assoc("filter", item.filter, item)
      : dissoc("filter", item),
  (item: any) =>
    item && item.sort
      ? assoc("orderBy", `${item.sort.entity}_${item.sort.direction}`, item)
      : dissoc("orderBy", item),
  (item: any) =>
    item ? assoc("offset", (item.page - 1) * 10, item) : dissoc("offset", item)
);
