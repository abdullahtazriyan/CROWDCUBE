import React from 'react';
import Nav from '../Conponents/Nav';
import Footer from '../Conponents/Footer';
import FaqSection from '../Conponents/FaqSection ';
import { Outlet } from 'react-router-dom';

const PagesLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <FaqSection></FaqSection>
            <Footer></Footer>
        </div>
    );
};

export default PagesLayout;