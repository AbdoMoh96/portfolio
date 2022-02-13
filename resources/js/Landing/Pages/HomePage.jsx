import React,{useEffect} from 'react';
import Layout from "../Layout/Layout";


const HomePage = () => {

    useEffect(() => {
        console.log('HomePage Mounted');
    },[])

    return(
        <Layout>
            <h1>Home Page Here</h1>
        </Layout>
    );

}

export default HomePage;
