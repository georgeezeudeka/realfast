import {useState} from 'react';
import Link from 'next/link'
import {AiOutlineClose, AiOutlineArrowRight} from 'react-icons/ai';
import {navbarstyles} from '@/utilities/navbar.styles';

export default function MobileNav(){
    const [showMobileNav, setShowMobileNav] = useState(true);
    
    return (
        <>
        <nav className={navbarstyles.mobileNav}
        style={{display: showMobileNav ? 'none' : 'block'}}>
            <AiOutlineClose className={navbarstyles.mobileMenuClose} 
            onClick={() => setShowMobileNav(false)}/>

            <div className={navbarstyles.halfscreenmenublock}>
              <ul className={navbarstyles.mobileMenuItems}>
              <li className={navbarstyles.mobileMenuItem}>
              <Link href='#' className={navbarstyles.mobileMenuText}>Home</Link>
            </li>
              <li className={navbarstyles.mobileMenuItem}>
              <Link href='#' className={navbarstyles.mobileMenuText}>Find jobs</Link>
            </li>
              <li className={navbarstyles.mobileMenuItem}>
              <Link href='#' className={navbarstyles.mobileMenuText}>Pricing</Link>
            </li>
              <li className={navbarstyles.mobileMenuItem}>
              <Link href='#' className={navbarstyles.mobileMenuText}>Support</Link>
            </li>
              <li className={navbarstyles.mobileMenuItem}>
              <Link href='#' className={navbarstyles.mobileMenuText}>Contact us</Link>
            </li>
              </ul>

              <div className={navbarstyles.mobileBottonItems}>
                <Link href='#' className={navbarstyles.signinBtn}>
                  <span className={navbarstyles.btnItems}>Sign in</span>
                  <AiOutlineArrowRight className={navbarstyles.btnItems}/>
                  </Link>
                <Link href='#'className={navbarstyles.createAcctBtn}><span>Create account</span>
                <AiOutlineArrowRight/>
                </Link>
              </div>
            </div>
            </nav>
        </>
    )
} 