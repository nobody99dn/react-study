// Library
import React, { memo } from 'react';

// Components
import { Card , Title} from '@components/index';

// Styles
import './index.css';

// Constants
import { Currencies, ERROR_MESSAGES } from '@constants/index';

// Model
import { Product } from '@models/product';

// Utils
import { areEqual } from '@utils/areEqual';


export interface PostsProps {
  products: Product[];
  handleNavigate: (productId: string) => void;
  handleDeleteProduct: (id: string) => void;
}

const Posts: React.FC<PostsProps> = ({
  products,
  handleNavigate,
  handleDeleteProduct
}) => (
  <div className='product-group'>
    {(products || []).map((product: Product) => (
      <Card
        key={product.id}
        product={product}
        currency={Currencies.VND}
        handleNavigate={handleNavigate}
        handleDeleteProduct={handleDeleteProduct}
      />
    ))}

    {!products.length && 
      <div className='no-products'>
        <Title>{ERROR_MESSAGES.NO_PRODUCTS_FOUND}</Title>
      </div>
    }
  </div>
);

export default memo(Posts, areEqual<PostsProps>);
