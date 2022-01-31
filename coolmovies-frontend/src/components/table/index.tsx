import { TableProps } from "../../schema/components/Table";
import TableContent from "./TableContent";
import TableFotter from "./TableFotter";
import TableHeader from "./TableHeader";

const Table = ({ columns, data }: TableProps) => {
  return (
    <>
      <TableHeader columns={columns} />
      <TableContent columns={columns} data={data} />
      <TableFotter data={data} />
    </>
  );
};

export default Table;
