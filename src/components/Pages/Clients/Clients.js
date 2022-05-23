import React from 'react';
import useClients from '../../../hooks/useClients.';
import AllClients from './AllClients';

const Clients = () => {

    const [clients] = useClients();

    return (
        <div>
            <h1>Clients</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2'>
                {
                    clients.map(client => <AllClients
                        key={client._id}
                        client={client}
                    ></AllClients>)
                }
            </div>
        </div>
    );
};

export default Clients;