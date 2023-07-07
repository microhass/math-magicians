import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Outlet } from 'react-router-dom';
import navLinks from '../data/links';

const Layout = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Layout;
