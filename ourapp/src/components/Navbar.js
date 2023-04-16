import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';
import { Button } from './Button';
function Navbar(){
    const[click,setClick]=useState(false);
    const[button,setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu =()=>setClick(false);
    const showButton =()=>{
        if(window.innerWidth <=960){
        setButton(false);
        }else{
            setButton(true);
        }
    };
    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    
                    <Link to='/' className='navbar-logo'>
                        The Plant Palace <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click?'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link  to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to='/garden' className='nav-links' onClick={closeMobileMenu}>
                                Garden
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to='/about-my-plants' className='nav-links' onClick={closeMobileMenu}>
                                About my plants
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to='/explore' className='nav-links' onClick={closeMobileMenu}>
                                Explore
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to='/connect' className='nav-links' onClick={closeMobileMenu}>
                                Connect
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                                </Link>
    </li>
                    </ul>
                    {button && <Button buttonstyle='btn--outline'>Products</Button>}
                </div>
            </nav>
         </>   
    );
    }
export default Navbar;