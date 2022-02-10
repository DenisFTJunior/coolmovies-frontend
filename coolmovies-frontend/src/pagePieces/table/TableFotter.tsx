import { Pagination } from "@mui/material";
import React from "react";

import { Movies } from "../../schema/api/Movies";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { actions as queryActions } from "../../utils/stateManager/slice/sync/querySlice";

const TableFotter = ({ data }: { data: Movies }) => {
  const dispatch = useStateDispatch();
  const { setPage } = queryActions;

  return (
    <Pagination
      sx={{ marginTop: 2 }}
      count={Math.ceil(data?.allMovies.totalCount / 20)}
      hideNextButton={!data?.allMovies.pageInfo?.hasNextPage}
      hidePrevButton={!data?.allMovies.pageInfo?.hasPreviousPage}
      variant="outlined"
      shape="rounded"
      onChange={(event, page) =>
        dispatch(setPage({ data: page, query: "movie" }))
      }
    />
  );
};

export default TableFotter;
