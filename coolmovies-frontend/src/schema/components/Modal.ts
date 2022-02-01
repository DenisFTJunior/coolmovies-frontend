export interface ModalProps {
  items: Item[];
  request?: any;
}

export interface Item {
  prop: string;
  style?: Style;
  label: string;
  render?: (data: any, item: Item) => JSX.Element;
  required?: boolean;
}

export interface DetailItem {
  label: string;
  prop: string;
  render?: (data: any, item: DetailItem) => JSX.Element;
}

export interface DetailModalProps {
  items: DetailItem[];
}

interface Style {
  width?: string;
  margin?: string;
}
