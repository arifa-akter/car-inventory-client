import React from 'react';
import Banner from '../Banner/Banner';
import CarInventory from '../CarInventory/CarInventory';
import LatestNews from '../LatestNews/LatestNews';
import Operation from '../Operation/Operation';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CarInventory></CarInventory>
           <Operation></Operation>
           <LatestNews></LatestNews>
        </div>
    );
};

export default Home;