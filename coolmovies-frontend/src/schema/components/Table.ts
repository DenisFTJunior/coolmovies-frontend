import { Movie } from "../api/Movie";

export interface TableProps {
  columns: Column[];
  data: Movie[];
}

export interface Column {
  id: string;
  label: string;
  dataIndex: string;
  sortOption: { entity: string; type: string };
  render?: JSX.Element;
}
