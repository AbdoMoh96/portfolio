import React,{useEffect,useState} from "react";
import profileImage from "../../Resources/images/profile.jpeg";

const Nav = () => {

    const [position , positionUpdate] = useState('');

    useEffect(() => {
        window.removeEventListener('scroll' , () => null);
        window.addEventListener('scroll' , () => {
            let scroll = Math.round(window.scrollY);
            let marker = 10;

            if (scroll > marker){
                positionUpdate('name_image_holder_top');
            }else if(scroll < marker){
                positionUpdate('');
            }
        });
    }, []);

    return(
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
          </ul>

          <div className={`name_image_holder ${position}`}>
              <img src={profileImage} alt=""/>
              <div>
                  <span>Abdelrahman</span>
                  <span>Mohammed</span>
              </div>
          </div>



          <a href="https://www.github.com/AbdoMoh96" target="_blank" rel="noreferrer" className="github">github</a>
      </nav>
    );
}

export default Nav;
