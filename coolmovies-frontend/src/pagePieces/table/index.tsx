import React from "react";
import { Table as MarerialTable } from "@mui/material";

import { TableProps } from "../../schema/components/Table";
import TableContent from "./TableContent";
import TableFotter from "./TableFotter";
import TableHeader from "./TableHeader";

const Table = ({ columns, data }: TableProps) => {
  return (
    <MarerialTable>
      <TableHeader columns={columns} />
      <TableContent columns={columns} data={data} />
      <TableFotter data={data} />
    </MarerialTable>
  );
};

export default Table;
