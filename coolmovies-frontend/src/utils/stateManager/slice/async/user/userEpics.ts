import { combineEpics } from "redux-observable";

import { epicDeleteUser } from "./epics/epicDeleteUser";
import { epicSaveUser } from "./epics/epicSaveUser";
import { epicUpdateUser } from "./epics/epicUpdateUser";
import { epicFetchUser } from "./epics/epicUser";
import { epicFetchUsers } from "./epics/epicUsers";

const userEpics = combineEpics(
  epicDeleteUser,
  epicSaveUser,
  epicFetchUser,
  epicUpdateUser,
  epicFetchUsers
);

export default userEpics;
