import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Chart from './Chart';
import Reviews from './Reviews';
import TopClients from './TopClients';
import TopProduct from './TopProduct';

const Dashboard = () => {
    return (
        <div className='lg:px-12'>
            <Banner></Banner>
            {/* <Chart></Chart> */}
            <TopProduct></TopProduct>
            <TopClients></TopClients>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Dashboard;