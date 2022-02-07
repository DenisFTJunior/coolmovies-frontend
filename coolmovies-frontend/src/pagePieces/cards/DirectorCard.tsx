import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { ShowDirector } from "../../components/show/ShowDirector";
import { Director } from "../../schema/api/Director";

const DirectorCard = ({ director }: { director: Director }) => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20rem",
      minWidth: "18rem",
    }}
  >
    <CardContent sx={{ flex: "1 0 auto" }}>
      <ShowDirector director={director} />
    </CardContent>
  </Card>
);

export default DirectorCard;
