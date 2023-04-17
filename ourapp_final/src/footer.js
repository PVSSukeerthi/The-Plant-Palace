import React from "react";
import './footer.css';

function Footer  () {
    return (
      <div className="bg-gray-200 py-5 text-gray-900 text-center">
        
        <div>
           
            <div className="footer">
              <ul>
            <li className='line'>Copyright © 2023 The Plant Palace. Powered by itstore.</li>
            <li className='line'>Follow us on:</li>
            <li>The Plant Palace</li>
                <div className="socialMedia">
                <a href="https://www.instagram.com" target="_blank">
                        <img className='mm'src={require('./images/instagramlogo.png')}/>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <img className='mm'src={require('./images/facebooklogo.png')}/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img className='mm'src={require('./images/twitterlogo.png')}/>
                    </a>
                </div>
                </ul>
            </div>
        </div>
      </div>
    );
    };
  
  export default Footer;