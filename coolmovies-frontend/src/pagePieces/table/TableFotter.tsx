import { Pagination } from "@mui/material";
import React from "react"


import { Movies } from "../../schema/api/Movies";
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { actions as generalActions } from "../../utils/stateManager/slice/sync/generalSlice";

const TableFotter = ({ data }: { data: Movies }) => {
  const dispatch = useStateDispatch();
  const { setPage } = generalActions;

  return (
    <Pagination
      count={Math.ceil(data.totalCount / 20)}
      hideNextButton={!data.pageInfo.hasNextPage}
      hidePrevButton={!data.pageInfo.hasPreviousPage}
      variant="outlined"
      shape="rounded"
      onChange={(event, page) => dispatch(setPage(page))}
    />
  );
};

export default TableFotter;
