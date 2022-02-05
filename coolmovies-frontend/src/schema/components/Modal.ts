export interface ModalProps {
  items: Item[];
  request?: any;
}

export interface Item {
  prop: string;
  style?: Style;
  label: string;
  render?: (
    data: any,
    item: Item,
    obj: { localValue: any; changeLocalValue: (arg: Object) => void }
  ) => JSX.Element;
  required?: boolean;
  typeInput?: string;
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
