import React, { useEffect, useState } from 'react';
import './FeatureItem.css';

const FeatureItem = () => {
    const [featureItems, setFeatureItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        //console.log('featureItems:', featureItems);
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                //console.log(data);
                setFeatureItems(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSeeMore = () => {
        setVisibleItems(featureItems.length);
    };

    return (
        <div className="flex mt-10 gap-7">
            <div className="first-div rounded-lg">
                <div className="">
                    <ul className="menu p-4 w-full min-h-full bg-base-200 space-y-3">
                        <div className='m-10'>
                            <h1 className="text-xl font-medium">Free Shipping</h1>

                            <p>minimum order 3</p>
                        </div>
                        <div className='m-10'>

                            <h1 className="text-xl font-medium mt-10">24/7 Support</h1>
                            <p>
                                contract 24 hours
                            </p>
                        </div>
                        <div className='m-10'>
                            <h1 className="text-xl font-medium mt-10">Best Price And Offers</h1>
                            <p>
                                Order $100 or More
                            </p>
                        </div>
                        <div className='m-10'>

                            <h1 className="text-xl font-medium mt-10">Easy Returns</h1>
                            <p>
                                With in 10 days
                            </p>
                        </div>

                    </ul>
                </div>
            </div>
            <div className="second-div">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {featureItems.slice(0, visibleItems).map(item => (
                        <div key={item.id} className="card">
                            <img src={item.thumbnail
                            } alt={item.name} className="card-image" />
                            <div className="absolute top-0 left-0 p-2">
                                <p className="card-discount bg-red-800 rounded-lg p-1 font-bold text-white">-{item.discountPercentage}%</p>
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">{item.description}</h2>
                                <p className="card-rating">{item.rating}</p>
                                <div className='flex justify-between'>

                                    <p className="card-price text-2xl text-blue-500">${item.price}</p>
                                    <p className="card-discount underline">${item.discountPercentage}%</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {visibleItems < featureItems.length && (
                    <div className="text-center mt-6 ">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleSeeMore}>
                            See More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeatureItem;