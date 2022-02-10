import React from "react";
import { Stack, Table as MarerialTable } from "@mui/material";

import { TableProps } from "../../schema/components/Table";
import TableContent from "./TableContent";
import TableFotter from "./TableFotter";
import TableHeader from "./TableHeader";

const Table = ({ columns, data, refetch }: TableProps) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <MarerialTable>
        <TableHeader columns={columns} refetch={refetch} />
        <TableContent columns={columns} data={data} />
      </MarerialTable>
      <TableFotter data={data} refetch={refetch}/>
    </Stack>
  );
};

export default Table;
