import React from 'react';
import { Navbar } from '../ui/navbar/Navbar';
import PropTypes from 'prop-types';
import Footer from '../ui/footer/Footer';

type Props = {
    children: React.ReactNode;
    bgColor: string;
    bgFooter:string;
    pb?:string;
}

const Layout: React.FC<Props> = ({ children, bgColor,pb,bgFooter }) => {
    return (
        <>
            <header className='w-full shadow-[0_9px_7px_rgba(202,209,220,0.2)] border border-solid border-[#e8e8ea]'>
                <Navbar />
            </header>
            <main className={`w-full ${pb}`} style={{backgroundColor:bgColor}}>
                {children}
            </main>
            <footer className={`w-full ${bgFooter} relative`}>
                <Footer />
            </footer>
        </>
    )
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node
};
