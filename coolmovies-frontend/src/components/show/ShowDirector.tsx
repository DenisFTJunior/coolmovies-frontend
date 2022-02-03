import React from "react";

import Loading from "../Loading";
import AvatarWithName from "../AvatarWithName";
import { Director } from "../../schema/api/Director";

export const ShowDirector = ({ director }: { director: Director }) => {
  if (!director) return <Loading />;

  return <AvatarWithName name={director.name} />;
};
