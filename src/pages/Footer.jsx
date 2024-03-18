import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <section className=''>
 <footer className="text-gray-400 bg-gray-900 body-font max-h-96 cursor-pointer	">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
   
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Our Company</h2>
        <nav className="list-none mb-10">
          <li>
            < p className="text-gray-400 hover:text-white">About Us</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Categories</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Third Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Fourth Link</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-gray-400 hover:text-white">First Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Second Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Third Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Fourth Link</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-gray-400 hover:text-white">First Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Second Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Third Link</p>
          </li>
          <li>
            <p className="text-gray-400 hover:text-white">Fourth Link</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm	 mb-3">Refresh Company </h2>
     
      </div>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75 ">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <h2 className="title-font font-medium text-white tracking-widest text-lg	 mb-3">Follow Us</h2>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="ml-3 text-gray-400">
         <p><FaFacebook className='text-white text-3xl	'/></p>
        </a>
        <a className="ml-3 text-gray-400">
       <p><FaInstagram className='text-3xl text-pink-600	' /></p>
        </a>
        <a className="ml-3 text-gray-400">
       <p><FaTwitter className='text-white text-3xl'/></p>
        </a>
      </span>
    </div>
  </div>
</footer>
</section>
    </>
  )
}

export default Footer

