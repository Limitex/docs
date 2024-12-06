import { ReactNode } from 'react';

export type ComponentData = {
  title: string;
  img: string;
  href: string;
  assetsPath: string;
  dependencies?: ComponentData[];
};

export type ComponentResult = {
  data: ComponentData;
  content: ReactNode;
};

export type ComponentProps = {
  data: ComponentData;
  children?: ReactNode;
};
