import { assoc, compose, pick } from "ramda";

const handlePage = (page: number): number => page * 10;

export const cleanRequest = compose(
  pick(["filter", "orderBy", "offset"]),
  (item: any) => assoc("offset", handlePage(item.page), item),
  (item) => assoc("filter", item.filter, item),
  (item: any) =>
    assoc("orderBy", `${item.sort.entity}_${item.sort.direction}`, item)
);
