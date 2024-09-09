import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImage from '../assests/no-image.jpg';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = '';
  }

  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="Product Image"
    />
  );
};