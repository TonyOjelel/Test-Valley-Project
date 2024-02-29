"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';

interface ProductTileProps {
    title: string;
    subtitle: string;
    description: string;
    media: {
        uri: string;
        type: string;
    }[];
}

const ProductTile: React.FC<ProductTileProps> = ({ title, subtitle, description, media }) => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
            .then(response => response.json())
            .then(data => {
                // Assuming the data returned from the API is an array of products
                setProducts(data.items);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-tile">
            {/* Render product tiles based on fetched data */}
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <h4>{product.subtitle}</h4>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductTile;
