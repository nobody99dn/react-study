// Library
import React, { memo } from 'react';

// Components
import Card from '@components/commons/Card';

// Styles
import './index.css';

// Constants
import { Currencies } from '@constants/index';

// Model
import { Product } from '@models/product';

export interface PostsProps {
  products: Product[];
  handleOpenProductDetail: (productId: string) => void;
  handleDeleteProduct: (id: string) => void;
}

const Posts: React.FC<PostsProps> = ({
  products,
  handleOpenProductDetail,
  handleDeleteProduct
}) => (
  <div className='product-group'>
    {products.map((product: Product) => (
      // TODO: change product-row
      <div className='products-row' key={product.id}>
        <Card
          product={product}
          currency={Currencies.VND}
          handleOpenProductDetail={handleOpenProductDetail}
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
    ))}
  </div>
);

export default memo(Posts);
