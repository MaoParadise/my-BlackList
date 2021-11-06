import React from 'react';
import Header from './Header';
import SideLeftList from './side-left-list';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className='main'>
            <Header />
            <SideLeftList />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
