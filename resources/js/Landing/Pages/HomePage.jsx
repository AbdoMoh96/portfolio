import React,{useEffect} from 'react';
import '../Resources/Temp/style.css';

const HomePage = () => {

    useEffect(() => {
        console.log('HomePage Mounted');
    },[])

    return(
        <div className="vertical-container background" id="main">
            <div className="vertical-body">
                <div className="container">
                    <h2 className="title">Coming Soon</h2>
                    <p>Something will appear here.</p>
                    <a href="https://github.com/AbdoMoh96" rel="noreferrer" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    );

}

export default HomePage;
