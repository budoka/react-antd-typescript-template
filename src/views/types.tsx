export type Permission = 'full' | 'home';

export interface View {
  title: string;
  path: string | string[];
  component: JSX.Element;
  private: boolean;
  permission?: Permission;
}
