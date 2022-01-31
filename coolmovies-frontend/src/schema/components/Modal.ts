export interface ModalProps {
  items: Item[];
  request?: any;
}

export interface Item {
  prop: string;
  label: string;
  Element: JSX.Element;
  required: boolean;
}

export interface DetailItem {
  label: string;
  prop: string;
}

export interface DetailModalProps {
  items: DetailItem[];
}
