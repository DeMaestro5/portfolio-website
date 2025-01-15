import { useState } from 'react';
import { navLinks } from '../constants';

function NavItems() {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a'>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between py-5 mx-auto c-space'>
          <a
            href='/'
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'
          >
            Stephen
          </a>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus: outline-none sm:hidden flex'
            aria-label='Toggle menu'
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt='toggle'
              className='w-6 h-6'
            />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} `}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
