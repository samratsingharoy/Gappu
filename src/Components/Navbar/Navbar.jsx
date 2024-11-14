import React from 'react'
import './Navbar.css'


const Navbar = () => {
return (
    <nav className="navbar" >
      {/* Logo Section */}
      <div className="logo">
        <img src="public\Gappu.png" alt="/" />
      </div>

      {/* Links Section */}
       <div className="nav-links">
        <button  href="#">Products</button>
        <button  href="#">Limited Edition</button>
        <button  href="#">Customized Cajon</button>
        <button  href="#">Hot Deals</button>
        <button  href="#">Track Order</button>
       </div>

      {/* Search and Cart Section */}
     <div className="search-cart">
        {/* Search Input */}
       <div className="search-box">
         <input type="text" placeholder="Search..." />
         <button className="search-btn">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
            
             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
           </svg>
         </button>
       </div>

        {/* Cart Icon */}
         <div className="cart-icon">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
             <path d="M6 6h15l-1.68 9.39a2 2 0 0 1-2 1.61H8.09a2 2 0 0 1-2-1.61L4 8H2"></path>
      
             <circle cx="20" cy="21" r="1"></circle>
           </svg>
           <span className="cart-count">0</span>
         </div>
       </div>
     </nav>
  )
}

export default Navbar
