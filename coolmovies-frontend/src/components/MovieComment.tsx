import { Box, Paper, Typography } from "@mui/material";
import { Comment } from "../schema/api/Comment";

const MovieComment = ({ comment }: { comment: Comment }) => {
  return (
    <Paper
      sx={{
        width: "20rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 10,
      }}
    >
      <Typography variant="h4" component="h4">
        {comment.title}
      </Typography>
      <Box
        sx={{
          width: "15rem",
          height: 1,
          backgroundColor: "#d3d3d3",
        }}
      />
      <Typography component="p">{comment.body}</Typography>
    </Paper>
  );
};

export default MovieComment;
