import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {HiOutlineMenu} from 'react-icons/hi';
import {AiOutlineClose,AiOutlineArrowRight} from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Your Dream Job | Real Fast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/realfast_logo.PNG"/>
      </Head>
      <main>
        <nav className={styles.navBar}>
          <ul className={styles.navSection}>
            <li className={styles.responsiveMenuItems}>
              <span className={styles.brandName}>Real fast</span>
            </li>
            <li>
              <Image width = {30} height = {38} src = '/realfast_logo.PNG' alt='real fast logo'/>
            </li>
            <li className={styles.responsiveMenuItems}>
              <Link href='#' className={styles.navText}>Find jobs</Link>
            </li>
          </ul>

          <ul className={styles.navSection}>
            <li className={styles.responsiveMenuItems}
            style={{borderRight:'2px solid gray',paddingRight:8}}>
              <Link href='#' className={styles.navText}>Sign in</Link>
            </li>

            <li className={styles.responsiveMenuItems}>
              <Link href='#' className={styles.navText}>Post a job</Link></li>
            <li>
              <HiOutlineMenu className={styles.menu}/>
              </li>
          </ul>
          </nav>    

          <nav className={styles.mobileNav}>
            <AiOutlineClose className={styles.mobileMenuClose}/>

            <div className={styles.halfscreenmenublock}>
              <ul className={styles.mobileMenuItems}>
              <li className={styles.mobileMenuItem}>
              <Link href='#' className={styles.mobileMenuText}>Home</Link>
            </li>
              <li className={styles.mobileMenuItem}>
              <Link href='#' className={styles.mobileMenuText}>Find jobs</Link>
            </li>
              <li className={styles.mobileMenuItem}>
              <Link href='#' className={styles.mobileMenuText}>Pricing</Link>
            </li>
              <li className={styles.mobileMenuItem}>
              <Link href='#' className={styles.mobileMenuText}>Support</Link>
            </li>
              <li className={styles.mobileMenuItem}>
              <Link href='#' className={styles.mobileMenuText}>Contact us</Link>
            </li>
              </ul>

              <div className={styles.mobileBottonItems}>
                <Link href='#' className={styles.signinBtn}>
                  <span className={styles.btnItems}>Sign in</span>
                  <AiOutlineArrowRight className={styles.btnItems}/>
                  </Link>
                <Link href='#'className={styles.createAcctBtn}><span>Create account</span>
                <AiOutlineArrowRight/>
                </Link>
              </div>
            </div>

          </nav>
      </main>
    </>
  )
}

const styles = {
  navBar:'h-[60px] flex flex-row justify-between items-center px-3 border border-gray-200 shadow-md',
  navSection:'flex flex-row space-x-3',
  // brandSection:'flex flex-row gap-2',
  brandName:'font-brand text-2xl text-purple-600 font-bold',
  navText:'text-gray-700 hover:text-purple-600',
  responsiveMenuItems:'hidden sm:block',
  menu:'w-[38px] h-[38px] text-gray-500',
  mobileNav:'h-screen w-full bg-black/80 absolute top-0 left-0',
  halfscreenmenublock:'h-screen min-width-[300px] max-w-[400px] flex-col justify-between bg-black absolute right-0 top-0',
  mobileMenuClose:'w-[38px] h-[38px] absolute top-2 right-2 z-10 text-gray-600 ',
  mobileMenuItems:'flex flex-col gap-3 pt-[60px] pr-4',
  mobileMenuItem:'text-end',
  mobileMenuText:'text-[20px] font-reading text-gray-400',
  mobileBottonItems:'px-3',
  signinBtn:'block w-full h-[58px] flex flex-row justify-center items-center px-3 bg-pink-400 rounded-md',
  btnItems:'text-xl',
  createAcctBtn:''
}