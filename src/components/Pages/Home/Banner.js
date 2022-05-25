import React from 'react';
import BannerStates from './BannerStates';


const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Welcome to Toolsegy</h1>
                        <p className="py-6">You can find all the necessary hand tools and power tools at best price here</p>
                    </div>
                </div>
            </div>
            <BannerStates></BannerStates>
        </div>
    );
};

export default Banner;