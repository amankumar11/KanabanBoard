import React from 'react'
import { BsStar } from "react-icons/bs";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className="main-title">Kanaban Board</h1>
        <BsStar className="ml-8 mr-4 nav-star" />
        <h1 className="main-title"> | </h1>
        <h1 className="main-title">Your Company</h1>
    </div>
  )
}

export default Navbar