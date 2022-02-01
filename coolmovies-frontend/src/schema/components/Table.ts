import { Movie } from "../api/Movie";
import { Movies } from "../api/Movies";
import { Review } from "../api/Review";

export interface TableProps {
  columns: Column[];
  data: { fetchedMovies: Movies };
}

export interface Column {
  id: string;
  label: string;
  prop: any;
  sortOption: {
    entity: string;
    direction: string;
  };
  render?: (data: any) => JSX.Element;
}

export interface TableAction {
  item: Movie | Review;
  actions: Action[];
}

export interface Action {
  label: string;
  action: Function;
  Icon: string;
}
