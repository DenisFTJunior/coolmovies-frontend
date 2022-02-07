import React from "react";

import AvatarWithName from "../AvatarWithName";
import { Director } from "../../schema/api/Director";

export const ShowDirector = ({ director }: { director: Director }) => {

  return <AvatarWithName name={director?.name} />;
};
