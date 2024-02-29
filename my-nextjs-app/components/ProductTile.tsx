"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

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
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount');
                setProducts(response.data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map(product => (
                <div key={product.id} style={{ width: '25%', padding: '10px' }}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    {product.media[0]?.uri && (
                        <Image
                            src={product.media[0].uri}
                            alt={product.title}
                            width={186}
                            height={186}
                            layout="responsive"
                        />
                    )}
                    {/* Render other product details */}
                </div>
            ))}
        </div>
    );
};

export default ProductTile;
