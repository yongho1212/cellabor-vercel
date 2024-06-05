// @flow
import React, {useState, useEffect} from 'react';
import HeaderNav from '../@organism/HeaderNav';
import Footer from '../@organism/Footer';
import {Outlet, Link, redirect, Navigate} from 'react-router-dom';

type Props = {

};

const NavLayout = (props: Props) => {
    return (
        <>
            <HeaderNav />
            <Outlet />
            <Footer />
        </>

    );
};

export default NavLayout;
