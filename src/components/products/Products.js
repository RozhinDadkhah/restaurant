import React from 'react';
import {
    ProductContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductBtn
} from './ProductItem';

const Products = ({ heading, data }) => {
    return (
        <ProductContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImage src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductBtn>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductContainer>
    );
};

export default Products;