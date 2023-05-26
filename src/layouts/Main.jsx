import React, { useContext, useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Loader from '../pages/Home/Loader/Loader';
import { Sugar } from 'react-preloaders';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {

    const { preloader } = useContext(AuthContext);

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Sugar color={'#EAB308'} customLoading={preloader} />
        </>
    );
};

export default Main;