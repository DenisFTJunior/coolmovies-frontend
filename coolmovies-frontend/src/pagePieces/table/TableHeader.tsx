import React, { useEffect, useState } from "react";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

import { Column } from "../../schema/components/Table";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as generalActions } from "../../utils/stateManager/slice/sync/generalSlice";

const TableHeader = ({ columns }: { columns: Column[] }) => {
  const dispatch = useStateDispatch();
  const stateGeneral = useStateSelector((state) => state.general);
  const { setSort } = generalActions;

  const sortDirectionHandler = (column: Column) =>
    column.sortOption.direction === "ASC" ? "asc" : "desc";

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            sortDirection={sortDirectionHandler(column)}
          >
            <TableSortLabel
              active={column.sortOption.entity === stateGeneral?.sort?.entity}
              direction={sortDirectionHandler(column)}
              onClick={() =>
                dispatch(
                  setSort({
                    entity: column.sortOption.entity,
                    direction:
                      column.sortOption === stateGeneral.sort
                        ? stateGeneral.sort.direction === "ASC"
                          ? "DESC"
                          : "ASC"
                        : "ASC",
                  })
                )
              }
            >
              {column.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
