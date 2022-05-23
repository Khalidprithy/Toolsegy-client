import React from 'react';

const ShowClient = ({ client }) => {
    return (
        <div className="card border rounded-md">
            <div className='flex items-center justify-evenly p-2'>
                <div className="avatar">
                    <div className="w-16 rounded-xl">
                        <img src={client.photo} alt='' />
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{client.company}</h2>
                    <p className='text-xs font-light'>{client.name}</p>
                </div>
            </div>
            <div className="card-body">
                <div className="divider p-0 m-0"></div>
                <p>{client.description}</p>
            </div>
        </div>
    );
};

export default ShowClient;