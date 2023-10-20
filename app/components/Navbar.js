"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import { useAuthContext } from "@/context/AuthContext";0

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const {user} = useAuthContext()
  return (
    <div>
      <nav className="font-mont bg-transparent shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              className=" mr-3"
              width={45}
              height={45}
              alt='a'
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Harmonix
            </span>
          </a>
          {user? (
            <>
                      <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-white rounded-lg hover:bg-sec focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'hidden' : 'block'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'block' : 'hidden'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.293 5.293a1 1 0 0 0-1.414 0L10 8.586 7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10 6.293 12.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0 0-1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
          <div
            className={`w-full ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-prim`">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-sec hover:bg-thir"
                  aria-current="page"
                >
                  ؤ ء
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-thir"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-thir "
                >
                  About
                </a>
              </li>
            </ul>
          </div>
            </>
          ):(
            <></>
          )}

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
