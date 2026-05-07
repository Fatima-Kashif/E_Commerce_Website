"use client";
import { useState } from "react";
import Link from "next/link";
import CartWrapper from "./CartWrapper";
import NavbarAuth from "./NavbarAuth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-1">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="furniro logo.png" alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
          <h1 className="text-xl md:text-3xl font-bold font-custom">Furniro</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex text-lg font-custom gap-16 font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Desktop icons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/product_page">
            <button aria-label="Profile">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3333 10V4.16669H23.6666V11.1667H21.3333M21.3333 15.8334H23.6666V13.5H21.3333M9.66665 11.1667C12.7816 11.1667 19 12.73 19 15.8334V19.3334H0.333313V15.8334C0.333313 12.73 6.55165 11.1667 9.66665 11.1667ZM9.66665 0.666687C10.9043 0.666687 12.0913 1.15835 12.9665 2.03352C13.8416 2.90869 14.3333 4.09568 14.3333 5.33335C14.3333 6.57103 13.8416 7.75802 12.9665 8.63319C12.0913 9.50836 10.9043 10 9.66665 10C8.42897 10 7.24198 9.50836 6.36682 8.63319C5.49164 7.75802 4.99998 6.57103 4.99998 5.33335C4.99998 4.09568 5.49164 2.90869 6.36682 2.03352C7.24198 1.15835 8.42897 0.666687 9.66665 0.666687ZM9.66665 13.3834C6.20165 13.3834 2.54998 15.0867 2.54998 15.8334V17.1167H16.7833V15.8334C16.7833 15.0867 13.1316 13.3834 9.66665 13.3834ZM9.66665 2.88335C9.01687 2.88335 8.3937 3.14148 7.93424 3.60094C7.47477 4.06041 7.21665 4.68357 7.21665 5.33335C7.21665 5.98313 7.47477 6.6063 7.93424 7.06577C8.3937 7.52523 9.01687 7.78335 9.66665 7.78335C10.3164 7.78335 10.9396 7.52523 11.3991 7.06577C11.8585 6.6063 12.1166 5.98313 12.1166 5.33335C12.1166 4.68357 11.8585 4.06041 11.3991 3.60094C10.9396 3.14148 10.3164 2.88335 9.66665 2.88335Z" fill="black"/>
              </svg>
            </button>
          </Link>
          <Link href="#">
            <button aria-label="Search">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 23.5L18.2664 18.257M21.1667 11.25C21.1667 13.88 20.1219 16.4024 18.2622 18.2621C16.4024 20.1219 13.8801 21.1666 11.25 21.1666C8.61998 21.1666 6.09763 20.1219 4.2379 18.2621C2.37816 16.4024 1.33337 13.88 1.33337 11.25C1.33337 8.61992 2.37816 6.09757 4.2379 4.23784C6.09763 2.3781 8.61998 1.33331 11.25 1.33331C13.8801 1.33331 16.4024 2.3781 18.2622 4.23784C20.1219 6.09757 21.1667 8.61992 21.1667 11.25V11.25Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </Link>
          <Link href="#">
            <button aria-label="Wishlist">
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16671 1.5C3.94554 1.5 1.33337 4.08533 1.33337 7.275C1.33337 9.84983 2.35421 15.9608 12.4027 22.1383C12.5827 22.2479 12.7893 22.3058 13 22.3058C13.2107 22.3058 13.4174 22.2479 13.5974 22.1383C23.6459 15.9608 24.6667 9.84983 24.6667 7.275C24.6667 4.08533 22.0545 1.5 18.8334 1.5C15.6122 1.5 13 5 13 5C13 5 10.3879 1.5 7.16671 1.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
          <CartWrapper />
          <NavbarAuth />
        </div>

        {/* Mobile: cart + auth + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <CartWrapper />
          <NavbarAuth />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-5 px-6 py-4 border-t border-gray-200 font-custom text-lg font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      )}
    </header>
  );
}
