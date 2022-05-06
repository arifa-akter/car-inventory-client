import React from 'react';
import Banner from '../Banner/Banner';
import CarInventory from '../CarInventory/CarInventory';
import Operation from '../Operation/Operation';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CarInventory></CarInventory>
           <Operation></Operation>
        </div>
    );
};

export default Home;