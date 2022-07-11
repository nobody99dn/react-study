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

interface PostsProps {
  products: Product[];
  onOpenProductDetail: (productId: string) => void;
  onDeleteProduct: (id: string) => void;
}

const Posts: React.FC<PostsProps> = ({
  products,
  onOpenProductDetail,
  onDeleteProduct
}) => (
  <div className='product-group'>
    {products.map((product: Product) => (
      <div className='products-row' key={product.id}>
        <Card
          product={product}
          currency={Currencies.VND}
          onOpenProductDetail={onOpenProductDetail}
          onDeleteProduct={onDeleteProduct}
        />
      </div>
    ))}
  </div>
);

export default memo(Posts);
