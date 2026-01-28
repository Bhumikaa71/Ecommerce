import React, { useState, useEffect } from 'react'; 
import AddToCart from '../Pages/AddToCart';

function AddToCartProduct() {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/search?q=phone&skip=1&limit=2");
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
            <div className='grid grid-rows-2 space-y-6'>

            {album.map((item, key) => (
                <AddToCart
                    key={key}
                    img={item.thumbnail}
                    reviews={item.rating}
                    name={item.title}
                    price={`$${item.price}`}
                    stock={item.availabilityStatus}
                    discount={item.discountPercentage}
                    category={item.category}
                    minimumOrderQuantity={item.minimumOrderQuantity}
                    warrantyInformation={item.warrantyInformation}
                    shippingInformation={item.shippingInformation}
                    tags={item.tags}





                />
            ))}
        </div>
        </div>
    )
}

export default AddToCartProduct;



