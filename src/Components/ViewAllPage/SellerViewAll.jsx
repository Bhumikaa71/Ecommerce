import React, { useEffect, useState } from 'react';
import BestProductCart from '../product/BestProductCard';




function SellerViewAll() {
  const [album, setAlbum] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/search?q=phone&skip=1&limit=20");


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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>

                {album.map((item, key) => (
                    <BestProductCard
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
           
        </div>
  )
}

export default SellerViewAll