import React from 'react';
import Nav from './Partials/Nav';
import Footer from './Partials/Footer';

const Layout = ({children}) => {



    return(
        <main>
           <Nav/>
            { children }
           <Footer/>
        </main>
    );
}

export default Layout;
