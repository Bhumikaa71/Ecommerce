import React, { useState, useEffect } from 'react';
import TabletsProduct from './TabletsProduct';

function TabletsProductCart() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/search?q=phone&skip=18&limit=5"
        );
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4'>
      {album.map((item, key) => (
        <TabletsProduct
          key={key}
          img={item.thumbnail}
          reviews={item.rating}
          name={item.title}
          price={`$${item.price}`}
          stock={item.availabilityStatus}
          discount={item.discountPercentage}
        />
      ))}
    </div>
  );
}

export default TabletsProductCart;
