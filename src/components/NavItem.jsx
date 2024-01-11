/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NavItem({ nav }) {
    return (
        <li className='nav-item'>
            <a href="#" className="nav-link collapse">
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
            </a>
        </li>
    );
};

export default NavItem;
