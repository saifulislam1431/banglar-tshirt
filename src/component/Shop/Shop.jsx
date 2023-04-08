import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css'
import OrderReview from '../OrderReview/OrderReview';
import OrderSummary from '../OrderSummary/OrderSummary';
const Shop = () => {
    const allData = useLoaderData();
    // console.log(allData);
    const [cart,setCart] = useState([]);
    const handleAddCart = allData =>{
       console.log(allData);
       const updateCart =[...cart , allData]
       setCart(updateCart);
    }
    return (
        <div className='shopping-container'>
            <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5'>
                {
                    allData.map(singleData => <Product
                    key={singleData.id}
                    singleData={singleData}
                    handleAddCart={handleAddCart}
                    ></Product>)
                }
            </div>
           <div  className='bg-purple-300 mt-5 rounded-md'>
           <OrderSummary
            cart={cart}
            >
            </OrderSummary>
           </div>
        </div>
    );
};

export default Shop;