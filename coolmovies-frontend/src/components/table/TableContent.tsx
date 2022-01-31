import {
  Collapse,
  IconButton,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Column, TableProps } from "../../schema/components/Table";
import { Box } from "@mui/system";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as reviewActions } from "../../utils/stateManager/slice/async/review/reviewSlice";
import Loading from "../Loading";
import { Movie } from "../../schema/api/Movie";

const Row = ({ columns, data }: { columns: Column[]; data: Movie }) => {
  const [open, setOpen] = useState(false);

  //Review -----------------------------------------------------------
  const dispatch = useStateDispatch();
  const stateReview = useStateSelector((state) => state.review);
  const { clearReviewData, fetchReviews } = reviewActions;
  const review = stateReview.fetchedReview;
  if (review) dispatch(clearReviewData());
  if (!review) return <Loading />;
  dispatch(fetchReviews({ vars: { condition: { movieId: data.id } } }));

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map((column, columnIndex) => {
          const newData = { ...data, ...review };
          if (column.render) return column.render(newData);
          if (columnIndex === 0)
            return (
              <TableCell component="th" scope="row">
                {column.prop(newData)}
              </TableCell>
            );
          return <TableCell align="right">{column.prop(newData)}</TableCell>;
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Review - {review.title}
              </Typography>
              <Typography component="div">{review.body}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TableContent = ({ columns, data }: TableProps) => (
  <>
    {data.allMovies.movies.map((item) => (
      <Row columns={columns} data={item} />
    ))}
  </>
);

export default TableContent;
