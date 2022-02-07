export interface CardProps {
  item: any;
  actions: Action[];
}

export interface Action {
  label: string;
  action: Function;
  icon: any;
}
