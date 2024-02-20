// Product.js

import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product-container mt-10 gap-4">
            <div className="rounded-lg bg-base-200 product-card">
                <div className='flex justify-center items-center'>
                    <div className='pl-5 space-y-7 w-1/2 mb-10'>
                        <p className="text-xl font-bold">Gaget store</p>
                        <h1 className="text-3xl font-bold uppercase"> 30% sale</h1>
                        <p className='font-bold underline'>buy now</p>
                    </div>
                    <div>
                        <img src="https://cdn.dummyjson.com/product-images/7/1.jpg" alt="Product 1" />
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-base-200">
                <div className='flex justify-center items-center product-card'>
                    <div className='pl-5 space-y-7 w-1/2 mb-10'>
                        <p className="text-xl font-bold">New Laptop</p>
                        <h1 className="text-3xl font-bold uppercase"> New Arrival</h1>
                        <p className='font-bold underline'>buy now</p>
                    </div>
                    <div>
                        <img src="https://cdn.dummyjson.com/product-images/8/1.jpg" alt="Product 1" />
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-base-200">
                <div className='flex justify-center items-center product-card'>
                    <div className='pl-5 space-y-7 w-1/2 mb-10'>
                        <p className="text-xl font-bold">Gaget store</p>
                        <h1 className="text-3xl font-bold uppercase">save 30%</h1>
                        <p className='font-bold underline'>buy now</p>
                    </div>
                    <div >
                        <img className='set-image' src="https://cdn.dummyjson.com/product-images/12/2.jpg" alt="Product 1" />
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-base-200">
                <div className='flex justify-center items-center product-card'>
                    <div className='pl-5 space-y-7 w-1/2 mb-10'>
                        <p className="text-xl font-bold">Perfume store</p>
                        <h1 className="text-3xl font-bold uppercase"> 30% sale</h1>
                        <p className='font-bold underline'>buy now</p>
                    </div>
                    <div>
                        <img src="https://cdn.dummyjson.com/product-images/13/2.png" alt="Product 1" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;
