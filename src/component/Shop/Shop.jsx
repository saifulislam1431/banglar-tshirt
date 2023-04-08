import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Shop = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5'>
                {
                    allData.map(singleData => <Product
                    key={singleData.id}
                    singleData={singleData}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;