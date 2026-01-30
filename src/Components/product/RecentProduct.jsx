import React from 'react';

function RecentProduct() {
  const products = [
    {
      img: 'assets/53.png',
      label: 'NEW',
      reviews: 152,
      name: 'Xomie Remid 8 Sport Water Resistance Watch',
      price: '$579.00',
    },
    {
      img: 'assets/54.png',
      label: 'NEW',
      name: 'Microte Surface 2.0 Laptop',
      price: '$979.00',
    },
    {
      img: 'assets/55.png',
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: '$979.00 - $1,259.00',
    },
    {
      img: 'assets/56.png',
      label: 'SAVE $192.00',
      reviews: 152,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      price: '$579.00',
      oldPrice: '$779.00',
      save: true,
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 relative"
          >
            {/* Label */}
            {product.label && (
              <div
                className={`absolute top-3 left-3 text-center text-xs font-bold p-1 rounded-lg ${
                  product.save ? 'bg-green-600 text-white' : 'bg-black text-white'
                }`}
              >
                {product.label}
              </div>
            )}

            {/* Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-40 h-40 md:w-48 md:h-48 object-contain mt-6"
            />

            {/* Info */}
            <div className="flex flex-col items-center text-center mt-4 space-y-2 px-2">
              {product.reviews && <p className="text-sm text-gray-500">({product.reviews})</p>}
              <p className="font-bold text-lg md:text-xl">{product.name}</p>
              <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
                <span>{product.price}</span>
                {product.oldPrice && (
                  <span className="line-through text-red-600">{product.oldPrice}</span>
                )}
              </div>
            </div>

            {/* Bottom circle  */}
            <div className="bg-gray-200 h-10 w-14 rounded-full mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProduct;
