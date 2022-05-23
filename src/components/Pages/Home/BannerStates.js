import React from 'react';
import { GiDrill, GiBoltSaw, GiScrewdriver } from 'react-icons/gi';
import { FaHammer } from 'react-icons/fa';

const BannerStates = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-2'>
            <div className='card w-80 mx-auto p-2 border'>
                <h1 className='text-xl font-bold p-2'>Product summary</h1>
                <div className='grid grid-cols-2 gap-2'>
                    <div class="card bg-base-100 h-32 rounded-md border">
                        <div class="card-body">
                            <h2 class="card-title"><GiDrill></GiDrill></h2>
                            <p className='font-bold text-sm'>Power Tools</p>
                            <p>100+</p>
                        </div>
                    </div>
                    <div class="card bg-base-100 h-32 rounded-md border">
                        <div class="card-body">
                            <h2 class="card-title"><FaHammer></FaHammer></h2>
                            <p className='font-bold text-sm'>Hand Tools</p>
                            <p>150+</p>
                        </div>
                    </div>
                    <div class="card bg-base-100 h-32 rounded-md border">
                        <div class="card-body">
                            <h2 class="card-title"><GiBoltSaw></GiBoltSaw></h2>
                            <p className='font-bold text-sm'>Replace Parts</p>
                            <p>50+</p>
                        </div>
                    </div>
                    <div class="card bg-base-100 h-32 rounded-md border">
                        <div class="card-body">
                            <h2 class="card-title"><GiScrewdriver></GiScrewdriver></h2>
                            <p className='font-bold text-sm'>Accessories</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card w-80 h-80 mx-auto'>
                <h1 className='text-xl font-bold p-2'>Popular in</h1>
                <div class="bg-base-100 shadow-xl">
                    <div class="card-body rounded-md border">
                        <p className='flex items-center'>China <progress class="progress w-56 progress-primary mt-1 ml-1" value="80" max="100"></progress></p>
                        <p className='flex items-center'>India <progress class="progress w-56 progress-secondary mt-1 ml-1" value="50" max="100"></progress></p>
                        <p className='flex items-center'>Turkey <progress class="progress w-56 progress-info mt-1 ml-1" value="60" max="100"></progress></p>
                        <p className='flex items-center'>Japan <progress class="progress w-56 progress-success mt-1 ml-1" value="90" max="100"></progress></p>
                        <p className='flex items-center'>Japan <progress class="progress w-56 progress-success mt-1 ml-1" value="90" max="100"></progress></p>
                        <p className='flex items-center'>Japan <progress class="progress w-56 progress-success mt-1 ml-1" value="90" max="100"></progress></p>
                        <p className='flex items-center'>Japan <progress class="progress w-56 progress-success mt-1 ml-1" value="90" max="100"></progress></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerStates;