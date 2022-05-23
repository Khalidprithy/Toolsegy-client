import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Chart></Chart>
            <TopProduct></TopProduct>
            <TopClients></TopClients>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;