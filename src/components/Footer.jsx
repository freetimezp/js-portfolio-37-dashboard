/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer id="footer" className='footer'>
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>Freetime</span>
                </strong>
                . All Rights Reserved.
            </div>
            <div className="credits">
                Designed with <a href="#">Love</a>
            </div>
        </footer>
    );
};

export default Footer;
