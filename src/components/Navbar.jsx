import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  return (
    <div className='h-16 w-full mx-auto fixed bg-gray-100 flex items-center justify-between px-4 md:px-8'>
      <div className='text-lg font-bold'>NewsBox</div>
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>
      <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block bg-slate-100`}>
        { !isAuthenticated && <Link onClick={()=>loginWithRedirect()} className='block text-lg text-black md:inline px-2 py-1' to={'/'}>Login</Link>}
        { isAuthenticated && <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='block text-lg text-black md:inline px-2 py-1' to={'/'}>Logout</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/business'}>Business</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/entertainment'}>Entertainment</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/general'}>General</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/health'}>Health</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/science'}>Science</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/sports'}>Sports</Link>}
        { isAuthenticated && <Link className='block text-lg text-black md:inline px-2 py-1' to={'/categories/technology'}>Technology</Link>}
      </div>
    </div>
  );
}

export default Navbar;
