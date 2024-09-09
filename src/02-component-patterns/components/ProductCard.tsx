import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

import { createContext } from 'react';
import {
  ProductContextProps,
  IProductCardProps,
} from '../interfaces/interface';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};