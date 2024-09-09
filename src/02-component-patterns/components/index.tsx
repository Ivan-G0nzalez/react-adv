export { ProductButtons } from './ProductButton';
import { ProductButtons } from './ProductButton';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interface';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
