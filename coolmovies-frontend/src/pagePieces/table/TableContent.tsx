import { Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Column, TableProps } from "../../schema/components/Table";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { Movie } from "../../schema/api/Movie";
import { ShowReviewByMovieId } from "../../components/show/ShowReview";

const Row = ({ columns, data }: { columns: Column[]; data: Movie }) => {
  const [open, setOpen] = useState(false);

  //Review -----------------------------------------------------------
  const stateReview = useStateSelector((state) => state.review);
  const review = stateReview.fetchedReview;

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
            <ShowReviewByMovieId movieId={data.id} />
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
