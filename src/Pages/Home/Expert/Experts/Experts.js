import React from 'react';

import './Experts.css';

import bike from '../../../imgas/bike.jpg';





const Experts = () => {

    return (
        <div id='expert' className='container '>
            <div className='image'> <img src={bike} alt="" /></div>
            <div className='description'>
                <h3>Renroll bike rental service</h3>
                <p>Consecterur adipisicing elif sed eiusmod tempor dolore magna aliqua minip
                    veniam nostrud exercitation aliquip perpiciats unde omnis iste natus error sit
                    voluptatem ac ntium doloreque laudatiu.

                    Atotam rem aperiam , erspiciatis unde omnis iste natus error sitperspiciatis
                    unde omnis istw natus error voluptem ac ntium doloremque laudatium eaqu
                    ipsa quae abllo inventore ver et quasi architecto beatae vitae dicta sunt explicabo</p>
                <h6>Free booking cancellation up to 15 hours</h6>
                <h6>We offer 24/7 road retal assistance </h6>
                <h6>More than 350.00 satisfied customers</h6>
                <h6>Fleet of over 8,000 brand new scooters  bikes</h6>

            </div>
        </div>
    );
};

export default Experts;