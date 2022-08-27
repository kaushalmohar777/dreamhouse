import './Header.css';
import React from 'react';
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import User from "../assets/user.png";
import Home from "../assets/house.png";
import About from "../assets/house-design.png";
import Plans from "../assets/plans-design.png";
import Elevations from "../assets/buildings.png";
import Interiors from "../assets/interior-design.png";
import { Link } from "react-router-dom";


class Header extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         items: [],
         isLoaded: false
      }
   }

   componentDidMount() {
      fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/header_footer/103/')
         .then(result => result.json())
         .then(json => {
            this.setState({
               items: json,
               isLoaded: true
            })
         });
   }

   render() {
      var { isLoaded, items } = this.state;

      if (!isLoaded) {
         return (
            <div className='loader'></div>
         );
      } else {
         return (
            <header>
               <div className="header-top-section">
                  <div className="container-size">
                     <div className="header-top-inner">
                        <div className="header-top-left">
                           <p>{items.acf.header_top_section.left_title}</p>
                        </div>
                        <div className="header-top-right">
                           <ul>
                              <li><a href={`tel:${items.acf.header_top_section.phone}`}><img src={Phone} /> <span>+{items.acf.header_top_section.phone}</span></a></li>
                              <li><a href={`mailto:${items.acf.header_top_section.email}`}><img src={Email} /><span>{items.acf.header_top_section.email}</span></a></li>
                              {/* <li><a href="#"><img src={User} /><span>Login</span></a></li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="header-bottom-section">
                  <div className="container-size">
                     <div className="header-bottom-inner">
                        <div className="header-bottom-left">
                           <div className='site-logo'>
                           <Link to="/demosite"><img src={items.acf.header_bottom_section.logo} /></Link>
                           </div>
                        </div> 
                        <div className="header-bottom-right">
                           <nav>
                              <ul>
                                 <li><Link to="/demosite"><img src={Home} /> <span>Home</span></Link></li>
                                 <li><Link to="/about-us"><img src={About} /> <span>About Us</span></Link></li>
                                 <li><Link to="plans"><img src={Plans} /> <span>Plans</span></Link></li>
                                 <li><Link to="/elevation"><img src={Elevations} /> <span>Elevations</span></Link></li>
                                 <li><Link to="/interiors"><img src={Interiors} /> <span>Interiors</span></Link></li>
                                
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
         );
      }
   }
}


export default Header;