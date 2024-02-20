import React from 'react';

const Header = () => {
    return (
        <div className="navbar rounded-lg bg-blue-400 mt-10">
            <div className="navbar-start">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <a className="text-2xl text-white font-bold">Browser Category</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               
                <ul className="flex justify-center gap-10">
                    <li><a className="text-white font-semibold">Home</a></li>
                    <li><a className="text-white font-semibold">Product</a></li>
                    <li><a className="text-white font-semibold">Category</a></li>
                    <li><a className="text-white font-semibold">Offer</a></li>
                    <li><a className="text-white font-semibold">Page</a></li>
                    <li><a className="text-white font-semibold">Campin</a></li>
                    <li><a className="text-white font-semibold">Blog</a></li>
                    <li><a className="text-white font-semibold">Review</a></li>
                    <li><a className="text-white font-semibold">Flash Sale</a></li>
                    <li><a className="text-white font-semibold">contract Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default Header;
