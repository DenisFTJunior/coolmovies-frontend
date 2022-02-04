import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import dateFormatter from "../../components/helper/dateFormatter";
import { ShowReview } from "../../components/show/ShowReview";
import { ShowDirector } from "../../components/show/ShowDirector";
import { Review } from "../../schema/api/Review";

const ReviewCard = ({ review }: { review: Review }) => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20rem",
    }}
  >
    <CardContent sx={{ flex: "1 0 auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" variant="h5">
            {review?.movieByMovieId?.title}
          </Typography>
          <ShowReview review={review} onlyRating />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ShowDirector director={review?.movieByMovieId?.director} />
          <Typography component="span">
            {dateFormatter(review?.movieByMovieId?.releaseDate)}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "15rem",
            height: 1,
            backgroundColor: "#d3d3d3",
          }}
        />
        <ShowReview review={review} gradient />
      </Box>
    </CardContent>
  </Card>
);

export default ReviewCard;
