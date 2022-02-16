import React, {useEffect, useState} from "react";
import headerStyle from '../../../Resources/Pages/HomePage/sass/header.scss';
import Typewriter from 'typewriter-effect';

const Header = () => {

    const [position , positionUpdate] = useState('');

    const values = [
        "Html",
        "Css",
        "Sass",
        "Javascript",
        "React.js",
        "PHP",
        "MySql",
        "Laravel"
    ];

    useEffect(() => {
        window.removeEventListener('scroll' , () => null);
        window.addEventListener('scroll' , () => {
            let scroll = Math.round(window.scrollY);
            let marker = 10;

            if (scroll > marker){
                positionUpdate('position');
            }else if(scroll < marker){
                positionUpdate('');
            }
        });
    }, []);

    return(
        <header style={headerStyle}>


            <div className={`${position}`}>
                I'm a self taught developer from Egypt, <br/> I love learning new stuff not just in the tech industry.
            </div>

                <Typewriter
                    options={{
                        strings: values,
                        autoStart: true,
                        loop: true,
                        skipAddStyles:true
                    }}
                />

        </header>
    );
}

export default Header;
