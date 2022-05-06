import React from 'react';
import Banner from '../Banner/Banner'
import Experts from '../Expert/Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;