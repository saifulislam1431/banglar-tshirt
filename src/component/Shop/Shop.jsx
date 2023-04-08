import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css'
import OrderReview from '../OrderReview/OrderReview';
import OrderSummary from '../OrderSummary/OrderSummary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    const allData = useLoaderData();
    // console.log(allData);
    const [cart,setCart] = useState([]);

    const handleAddCart = allData =>{
    //    console.log(allData);
       const exist = cart.find(pd=>pd.id === allData.id);
       if(exist){
          toast('This product is already Added.')
          
       }else{
        const updateCart =[...cart , allData]
       setCart(updateCart);
       }
    }

    const handleRemoveCart = allData => {
         console.log(allData);
    }

    const handleRemoveItem = id =>{
        const remaining = cart.filter(item => item.id !== id)
        setCart(remaining)
        console.log(id);
    }
    return (
        <div className='shopping-container'>
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5'>
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
            handleRemoveCart={handleRemoveCart}
            handleRemoveItem={handleRemoveItem}
            >
            </OrderSummary>
           </div>
        </div>
    );
};

export default Shop;