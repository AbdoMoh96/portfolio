import React, {useEffect, useState} from 'react';
import Nav from './Partials/Nav';
import mainStyle from './Sass/main.scss';
import Footer from './Partials/Footer';

const Layout = ({children}) => {



    useEffect(() => {
    }, []);



    return(
        <main style={mainStyle}>

           <Nav/>
            { children }
           {/*<Footer/>*/}
        </main>
    );
}

export default Layout;
