import React from 'react';
import Nabvar from '../../shared/Nabvar/Nabvar';
import Header from '../../shared/Header/Header';
import Section from '../Section/Section';
import FeatureItem from '../FeatureItem/FeatureItem';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Header></Header>
            <Section></Section>
            <Product></Product>
            <FeatureItem></FeatureItem>
            
        </div>
    );
};

export default Home;