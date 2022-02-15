import React,{useEffect} from 'react';
import Layout from "../Layout/Layout";
import Header from "../Components/Pages/HomePage/Header";


const HomePage = () => {

    useEffect(() => {
        console.log('HomePage Mounted');
    },[])

    return(
        <Layout>


            <Header/>

            <div style={{
                height: '50vh'
            }}>
            </div>
        </Layout>
    );

}

export default HomePage;
