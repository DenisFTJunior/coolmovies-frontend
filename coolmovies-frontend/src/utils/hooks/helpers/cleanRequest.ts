import { assoc, compose, dissoc, pick } from "ramda";

const handlePage = (page: number): number => page * 10;

export const cleanRequest = compose(
  pick(["filter", "orderBy", "offset"]),
  (item: any) =>
    item && item.page? assoc("offset", handlePage(item.page), item) : dissoc("offset"),
  (item: any) => (item && item.filter? assoc("filter", item.filter, item) : dissoc("filter")),
  (item: any) =>
    item && item.sort
      ? assoc("orderBy", `${item.sort.entity}_${item.sort.direction}`, item)
      : dissoc("orderBy")
);
