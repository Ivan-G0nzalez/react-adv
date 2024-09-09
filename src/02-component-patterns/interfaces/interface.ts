import { ReactElement } from 'react';

export interface IProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
