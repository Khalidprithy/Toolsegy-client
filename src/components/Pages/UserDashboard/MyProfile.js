import React from 'react';
import { useQuery } from 'react-query';

const MyProfile = () => {

    /* 
        const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://radiant-depths-23183.herokuapp.com/user/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())); */

    return (
        <div>
            <h1>My Profile</h1>
        </div>
    );
};

export default MyProfile;