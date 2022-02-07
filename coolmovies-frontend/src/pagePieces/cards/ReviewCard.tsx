import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import dateFormatter from "../../components/helper/dateFormatter";
import { ShowReview } from "../../components/show/ShowReview";
import { ShowDirector } from "../../components/show/ShowDirector";
import { Review } from "../../schema/api/Review";
import { Stack } from "@mui/material";
import CardActions from "./CardActions";
import reviewActions from "../_actions/reviewActions";

const ReviewCard = ({ review }: { review: Review }) => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "center",
      justifyItems:"center",
      alignItems: "center",
      width: "20rem",
      maxWidth: "100%",
      margin: 2,
    }}
  >
    <CardContent >
      <CardActions item={review} actions={reviewActions()} />
      <ShowReview review={review} gradient rating />
    </CardContent>
  </Card>
);

export default ReviewCard;
