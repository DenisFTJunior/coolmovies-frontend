export interface ModalItems {
  items: Item[];
}

interface Item {
  prop: string;
  label: string;
  Element: JSX.Element;
}
