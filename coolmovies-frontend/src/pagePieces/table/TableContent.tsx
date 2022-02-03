import { TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Column, TableProps } from "../../schema/components/Table";
import { Movie } from "../../schema/api/Movie";
import Loading from "../../components/Loading";

const Row = ({ columns, data }: { columns: Column[]; data: Movie }) => {
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell></TableCell>
        {columns.map((column, columnIndex) => {
          if (column.render) return column.render(data);
          if (columnIndex === 0)
            return (
              <TableCell component="th" scope="row">
                {column.prop(data)}
              </TableCell>
            );
          return <TableCell align="right">{column.prop(data)}</TableCell>;
        })}
      </TableRow>
    </>
  );
};

const TableContent = ({ columns, data }: TableProps) => {
  useEffect(() => console.log("data", data), [data]);
  if (!data) return <Loading />;
  return (
    <>
      {data.allMovies?.movies.map((item: Movie) => (
        <Row columns={columns} data={item} />
      ))}
    </>
  );
};

export default TableContent;
