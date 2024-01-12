/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './backToTop.css';

function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });

        return () => {
            window.addEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const backToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <a className={`back-to-top d-flex align-items-center justify-content-center
            ${scroll > 100 ? 'active' : undefined}`} onClick={backToTop}>
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
};

export default BackToTop;
