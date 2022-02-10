import React from "react";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

import { Column } from "../../schema/components/Table";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as queryActions } from "../../utils/stateManager/slice/sync/querySlice";

const TableHeader = ({
  columns,
  refetch,
}: {
  columns: Column[];
  refetch: any;
}) => {
  const dispatch = useStateDispatch();
  const stateQuery = useStateSelector((state) => state.query);
  const { setSort } = queryActions;

  const sortDirectionHandler = () => {
    if (stateQuery.queries.movie.sort?.direction)
      return stateQuery.queries.movie.sort.direction;
    return "ASC";
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} sortDirection={sortDirectionHandler()}>
            {!column.disableSortOption ? (
              <TableSortLabel
                active={
                  column.sortOption.entity ===
                  stateQuery?.queries.movie?.sort?.entity
                }
                direction={stateQuery?.queries?.movie?.sort?.direction || "ASC"}
                onClick={() => {
                  dispatch(
                    setSort({
                      data: {
                        entity: column.sortOption.entity,
                        direction:
                          stateQuery?.queries.movie?.sort?.direction === "ASC"
                            ? "DESC"
                            : "ASC",
                      },
                      query: "movie",
                    })
                  );
                  refetch();
                }}
              >
                {column.label}
              </TableSortLabel>
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
