import React from 'react';

const Product = ({singleData}) => {
    const {name,img,price,seller,stock} = singleData;
    return (
        <div className='flex items-center justify-center mt-5'>
            <div className='product-card'>
                <div className='card border p-5 rounded-xl shadow-md border-purple-300 mb-4'>
                    <img src={img ? img : 'Image Not Found'} alt={name}  className='w-64 rounded-lg  mx-auto h-64'/>
                    <h1>{name}</h1>
                    <div>
                        <p>Price: {price}</p>
                        <p>Stock: {stock}</p>
                    </div>
                    <p>Brand: {seller}</p>
                    <button className='bg-purple-300 py-3 w-full mt-4 rounded-lg text-purple-950 hover:bg-purple-600 hover:text-white font-semibold'>Buy Now</button>
                </div>

            </div>
        </div>
    );
};

export default Product;