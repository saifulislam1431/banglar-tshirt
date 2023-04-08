import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Summary = ({ item ,handleRemoveItem}) => {
    return (
        <div  className='bg-purple-500 flex items-center justify-between py-3 px-2 rounded-lg mb-3'>
            <p className='font-medium text-white'>
                {item.name} </p>
            <button className='bg-red-200 p-2 rounded-full' onClick={()=>handleRemoveItem(item.id)}>
                <TrashIcon className="h-4 w-4 text-red-500" />
            </button>
        </div>
    );
};

export default Summary;