import { Movies } from "../api/Movies";

export interface TableProps {
  columns: Column[];
  data: Movies;
  refetch?: any;
}

export interface Column {
  id: string;
  label: string;
  prop: any;
  sortOption: {
    entity: string;
  };
  disableSortOption?: boolean;
  render?: (data: any) => JSX.Element;
}

export interface TableActionProps {
  item: any;
}

export interface Action {
  label: string;
  action: Function;
  icon: any;
}
