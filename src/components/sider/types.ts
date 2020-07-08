import { View } from 'src/views';

export interface Item {
  view?: View;
  title?: string;
  icon?: React.ReactNode;
  children?: Item[];
}
