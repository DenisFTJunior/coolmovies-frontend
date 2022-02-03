import { Item } from "../../../schema/components/Modal";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  { prop: "releaseDate", label: "Release Date" },
  // {  prop:"directorId", label: "Director", render:(data, item) => },
  // {  prop:"userCreatorId",label: "User", render:(data, item) => },
];
