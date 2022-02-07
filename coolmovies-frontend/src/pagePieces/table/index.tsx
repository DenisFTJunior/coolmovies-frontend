import React from "react";
import { Stack, Table as MarerialTable } from "@mui/material";

import { TableProps } from "../../schema/components/Table";
import TableContent from "./TableContent";
import TableFotter from "./TableFotter";
import TableHeader from "./TableHeader";

const Table = ({ columns, data }: TableProps) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <MarerialTable>
        <TableHeader columns={columns} />
        <TableContent columns={columns} data={data} />
      </MarerialTable>
      <TableFotter data={data} />
    </Stack>
  );
};

export default Table;
