import { Movies } from "../api/Movies";

export interface TableProps {
  columns: Column[];
  data: Movies;
}

export interface Column {
  id: string;
  label: string;
  dataIndex: string;
  sortOption: { entity: string; type: string };
  render?: JSX.Element;
}
