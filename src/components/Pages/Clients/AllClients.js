import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';

const AllClients = ({ client }) => {

    return (
        <div className="card card-side border rounded-md">
            <div className='p-2'>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={client.photo} alt='' />
                    </div>
                </div>
                <div>
                    <h2>{client.name}</h2>
                    <h2>ID: {client._id.slice(32, 37)}</h2>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{client.company}</h2>
                <p>{client.description}</p>
                <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-start'>
                        <AiFillPhone className='text-xs mr-1'></AiFillPhone>
                        <p className='p-0 text-xs m-0'>{client.phone}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-xs'><AiOutlineMail></AiOutlineMail></p>
                        <p className='p-1 text-xs'>{client.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClients;