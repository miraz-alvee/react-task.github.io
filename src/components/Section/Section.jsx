import React from 'react';
import './Section.css';
import image from '../../../public/picture (1).png'

const Section = () => {
    return (
        <div className="flex mt-10 gap-7">
            <div className="first-div rounded-lg">
                <div className="">
                    <ul className="menu p-4 w-full min-h-full bg-base-200 space-y-3">
                        {/* Sidebar content here */}
                        <h1 className=''></h1>
                        <li><a className="text-xl font-medium">Fashion Collection</a></li>
                        <li><a className="text-xl font-medium">Electronic Items</a></li>
                        <li><a className="text-xl font-medium">Home Items</a></li>
                        <li><a className="text-xl font-medium">Kitchen Items</a></li>
                        <li><a className="text-xl font-medium">Furniture</a></li>
                        <li><a className="text-xl font-medium">Food</a></li>
                        <li><a className="text-xl font-medium">Gadgets</a></li>
                        <li><a className="text-xl font-medium">Toys and Games</a></li>
                        <li><a className="text-xl font-medium">Health and Beauty</a></li>
                        <li><a className=" text-blue-500 text-2xl font-bold">View All Category</a></li>
                    </ul>
                </div>
            </div>
            <div className="second-div rounded-lg bg-base-200">
                <div className='flex justify-center items-center'>
                    <div className='pl-5 space-y-7 w-1/2 mb-10'>
                        <p className="text-xl font-bold">Up to <span className="font-bold text-2xl text-blue-400">70%</span> off on Black Friday</p>
                        <h1 className="text-5xl font-bold uppercase">Trendy <span className='text-blue-400'>Fashion</span> Collection</h1>
                        <div>
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                    <div>
                        <img className='mt-7' style={{ width: '550px' }} src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;