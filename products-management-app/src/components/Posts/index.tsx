// Library
import React from "react";

// Model
import Product from "@/models/product";

// Components
import { Card } from "@components/commons/Card";

// Styles
import './index.css';
import { Currencies } from "@/constants/types";

interface PostsProps {
  products: Product[];
  isLoading: boolean;
}

export const Posts: React.FC<PostsProps> = ({
  products,
  isLoading
}) => {
  const rows = [];

  // Add 3 products into 1 row
  for (let i = 0; i < products.length; i += 3) {
    rows.push(
      <div className="products-row">
        {
          products.slice(i, i + 3)
            .map(product => (
              <Card
                title={product.name}
                type={product.type}
                price={product.price}
                imageUrl={product.imageUrl}
                currency={Currencies.VND}
              />
            ))
        }
      </div>);
  }

  return (
    <div className="product-group">
      {isLoading
        ? <p>Loading...</p>
        : rows
      }
    </div>
  );
};
