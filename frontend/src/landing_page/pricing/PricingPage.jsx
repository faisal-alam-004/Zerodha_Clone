import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccounts';
import Brokerage from "./Brokerage";

function PricingPage() {
    return ( 
        <>
            <Hero />
            {/* <OpenAccount /> */}
            <Brokerage />
        </>
    );
}

export default PricingPage;