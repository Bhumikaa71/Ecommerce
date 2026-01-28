import React, { useEffect, useState } from 'react';
import BestProductCart from './BestProductCard';
import BestSeller from './BestSeller';


function BestProduct() {

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/search?q=phone&skip=1&limit=5");
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

        <div>
            <BestSeller />
            <div className='grid grid-cols-5'>

                {album.map((item, key) => (
                    <BestProductCart
                        key={key}
                        // id={item.id}
                        img={item.thumbnail}
                        reviews={item.rating}
                        name={item.title}
                        price={`$${item.price}`}
                        stock={item.availabilityStatus}
                        discount={item.discountPercentage}
                    />
                ))}
            </div>
            <div className='mt-10 p-4'>
                <h1 className='font-bold  text-2xl'>BRAND NEW FOR YOU</h1>

            </div>
        </div>


    );
}

export default BestProduct;
