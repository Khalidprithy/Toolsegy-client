import React from 'react';
import useClients from '../../../hooks/useClients.';
import ShowClient from './ShowClient';

const TopClients = () => {

    const [clients] = useClients();

    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>Our employees</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-2'>
                {
                    clients.slice(0, 3).map(client => <ShowClient
                        key={client._id}
                        client={client}
                    ></ShowClient>)
                }
            </div>
        </div>
    );
};

export default TopClients;