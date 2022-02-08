import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { ShowReview } from "../../components/show/ShowReview";
import { Review } from "../../schema/api/Review";
import CardActions from "./CardActions";
import reviewActions from "../_actions/reviewActions";

const ReviewCard = ({ review }: { review: Review }) => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
      width: { xs: "18rem", md: "24rem" },
      maxHeight: "40rem",
      minWidth: "18rem",
      margin: 2,
    }}
  >
    <CardContent sx={{ flex: 1 }}>
      <CardActions item={review} actions={reviewActions()} />
      <ShowReview review={review} gradient rating />
    </CardContent>
  </Card>
);

export default ReviewCard;
