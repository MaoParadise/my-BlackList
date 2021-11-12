import React from 'react';
import Header from './Header';
import SideLeftList from './side-left-list';
import Footer from './Footer';
import '../styles/Layout.css'

const Layout = ({children}) => {
    return (
        <div className='main'>
            <Header />
            <div className='principal-content'>
                <SideLeftList />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
