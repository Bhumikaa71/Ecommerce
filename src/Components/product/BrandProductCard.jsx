import React, { useState, useEffect } from 'react';
import BrandProduct from './BrandProduct'; 

const BrandProductCart = () => {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/search?q=phone&skip=6&limit=4");


                const data = await response.json();
                const products = data.products;

                setAlbum(products);
                console.log(products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='grid grid-cols-4'>
            {album.map((item, key) => (
                <BrandProduct
                    key={key}
                    img={item.thumbnail}
                    name={item.title}
                    description={item.description} 
                />
            ))}
        </div>

        
    );
};

export default BrandProductCart;
