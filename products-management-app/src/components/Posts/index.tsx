// Library
import React from "react";

// Model
import Product from "@/models/product";

// Components
import { Card } from "@components/commons/Card";
import { LoadingIndicator } from "@components/LoadingIndicator";

// Styles
import './index.css';
import { Currencies } from "@/constants/types";

type PostsProps = {
  products: Product[];
  isLoading: boolean;
};

export const Posts: React.FC<PostsProps> = ({
  products,
  isLoading
}) => {
  return (
    <div className={'product-group'}>
      {(isLoading
        && <div className={'loading-container'}><LoadingIndicator /></div>)
        || products
          .map(product => (
            <div className={'products-row'}>
              <Card
                title={product.name}
                type={product.type}
                price={product.price}
                imageUrl={product.imageUrl}
                currency={Currencies.VND}
              />
            </div>
          ))
      }
    </div>
  );
};
