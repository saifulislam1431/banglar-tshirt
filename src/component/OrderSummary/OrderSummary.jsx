import React from 'react';

import Summary from '../Summary/Summary';

const OrderSummary = ({ cart, handleRemoveCart,handleRemoveItem }) => {
    return (
        <div className='px-3'>
            <h1 className='text-center pt-3 text-lg font-bold'>Order Summary: {cart.length}</h1>
            
            <div className='my-5'>
                {
                    cart.map(item => <Summary
                    key={item.key}
                    item={item}
                    handleRemoveItem={handleRemoveItem}
                    ></Summary>
                    )
                }
            </div>
            <div>
                <button className='bg-green-400 w-full my-2 py-2 font-medium text-white rounded-lg'>Review</button>
            </div>
            <div>
                <button className='bg-red-500 w-full my-2 py-2 font-medium text-white rounded-lg' onClick={()=>handleRemoveCart(cart)}>Clear Cart</button>
            </div>
        </div>
    );
};

export default OrderSummary;