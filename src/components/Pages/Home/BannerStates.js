import React from 'react';
import { GiDrill, GiBoltSaw, GiScrewdriver } from 'react-icons/gi';
import { FaHammer } from 'react-icons/fa';

const BannerStates = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-2'>
            <div className='card w-80 h-80 mx-auto p-2 border rounded-md'>
                <h1 className='text-xl font-bold p-2'>Product summary</h1>
                <div className='grid grid-cols-2 gap-2'>
                    <div className="card bg-base-100 h-32 rounded-md border">
                        <div className="card-body">
                            <h2 className="card-title"><GiDrill></GiDrill></h2>
                            <p className='font-bold text-sm'>Power Tools</p>
                            <p>100+</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 h-32 rounded-md border">
                        <div className="card-body">
                            <h2 className="card-title"><FaHammer></FaHammer></h2>
                            <p className='font-bold text-sm'>Hand Tools</p>
                            <p>150+</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 h-32 rounded-md border">
                        <div className="card-body">
                            <h2 className="card-title"><GiBoltSaw></GiBoltSaw></h2>
                            <p className='font-bold text-sm'>Repair Parts</p>
                            <p>50+</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 h-32 rounded-md border">
                        <div className="card-body">
                            <h2 className="card-title p-0"><GiScrewdriver></GiScrewdriver></h2>
                            <p className='font-bold text-sm p-0'>Accessories</p>
                            <p className='p-0'>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card w-80 h-80 mx-auto border rounded-md sm:mt-2'>
                <h1 className='text-xl font-bold p-3'>Popular in</h1>
                <div className="bg-base-100">
                    <div className="card-body p-3 rounded-md border m-1">
                        <p className='flex items-center'>China <progress className="progress w-56 progress-primary mt-1 ml-1" value="80" max="100"></progress></p>
                        <p className='flex items-center'>India <progress className="progress w-56 progress-secondary mt-1 ml-1" value="50" max="100"></progress></p>
                        <p className='flex items-center'>Turkey <progress className="progress w-56 progress-info mt-1 ml-1" value="60" max="100"></progress></p>
                        <p className='flex items-center'>Japan <progress className="progress w-56 progress-success mt-1 ml-1" value="90" max="100"></progress></p>
                        <p className='flex items-center'>Nepal <progress className="progress w-56 progress-danger mt-1 ml-1" value="30" max="100"></progress></p>
                        <p className='flex items-center'>Germany <progress className="progress w-56 progress-warning mt-1 ml-1" value="65" max="100"></progress></p>
                        <p className='flex items-center'>Spain <progress className="progress w-56 progress-error mt-1 ml-1" value="50" max="100"></progress></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerStates;