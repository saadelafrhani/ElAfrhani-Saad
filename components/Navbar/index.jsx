import { useState } from 'react';
import styles from "../../styles/Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, SetMenuOpen] = useState(false);

    const closeMenu = () => {
        if (!menuOpen) {
            SetMenuOpen(menuOpen);
            menuOpen = true;
        }
        else {
            SetMenuOpen(!menuOpen);
            menuOpen = false;
        }
    }

    return (
        <header className={`py-3 px-2 flex justify-between items-center flex-wrap lg:py-7 ${styles.header} ${menuOpen ? `${styles.open}` : ""}`}>
            <div className="z-50">
                <h2 className="text-2xl text-white font-bold">
                    <Link href="/" title="EL Afrhani Saad">EL Afrhani Saad</Link>
                </h2>
            </div>
            <nav>
                <ul
                    className={`menu hidden absolute left-0 top-0 m-0 py-20 pt-16 px-4 bg-black z-40 w-full h-52 sm:w-unset sm:h-auto sm:bg-transparent sm:flex sm:py-0 sm:static sm:left-unset sm:top-unset ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
                    <li className="mb-4 mt-2 mx-0 sm:mb-0 sm:mt-0 sm:mx-3" title="Experiences">
                        {/*contact career*/}
                        <Link href="/career" onClick={() => closeMenu()}>
                            <span className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-teal-400 cursor-pointer">Career</span>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Projects">
                        {/*blog*/}
                        <Link href="/blog" onClick={() => closeMenu()}>
                            <span className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-teal-400 cursor-pointer">Blog</span>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Contact">
                        {/*contact*/}
                        <Link href="/contact" onClick={() => closeMenu()}>

                            <span className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-teal-400 cursor-pointer">
                                Contact
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div
                className={`z-50 flex flex-col justify-center items-center sm:hidden ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`}
                onClick={() => SetMenuOpen(!menuOpen)}>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
            </div>
        </header>
    )
}

export default Navbar;