import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-50 w-full transition-all duration-300 
            ${scrolled ? 'bg-white/35 backdrop-blur-md shadow-md' : 'bg-white'}`}>
            <section className='w-full container mx-auto px-10 py-4 text-gray-800'>
                <div className='flex items-center justify-between'>
                    <div className='opacity: 1; transform: none;'>
                        <div className='flex items-center space-x-2'>
                            <Link to="/">
                                <h1 className='text-xl font-bold text-primary'>ClinicPro</h1>
                            </Link>
                        </div>
                    </div>
                    <nav className='hidden md:flex items-center space-x-6'>
                        <a href="text-gray-600 hover:text-primary transition-colors">Inicio</a>
                        <a href="text-gray-600 hover:text-primary transition-colors">Servicios</a>
                        <a href="text-gray-600 hover:text-primary transition-colors">Contacto</a>
                    </nav>
                    <div className='flex items-center space-x-4'>
                        <Link to="/loginpage">
                            <button className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>Iniciar sesión</button>
                        </Link>
                        <button className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>Registrarse</button>
                    </div>
                </div >
            </section>
        </div>
    );
};

export default Header;