'use client';  // これを追加

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-white text-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-xl font-bold">
                        <Link href="/" className="text-black hover:text-gray-700">
                            MyLogo
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/about" className="text-black hover:text-gray-700">
                            About
                        </Link>
                        <Link href="/news" className="text-black hover:text-gray-700">
                            News
                        </Link>
                        <Link href="/product" className="text-black hover:text-gray-700">
                            Product
                        </Link>
                        <Link href="/login" className="text-black hover:text-gray-700">
                            Login
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-black hover:text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/about" className="block text-black hover:text-gray-700">
                            About
                        </Link>
                        <Link href="/news" className="block text-black hover:text-gray-700">
                            News
                        </Link>
                        <Link href="/product" className="block text-black hover:text-gray-700">
                            Product
                        </Link>
                        <Link href="/login" className="block text-black hover:text-gray-700">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
