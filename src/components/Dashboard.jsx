import React, { useState, useEffect } from 'react';
import './dashboard.css';

import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
import News from './News';
import Cards from './Cards';

function Dashboard() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('https://christmas-04.onrender.com/dashboard')
            .then(res => res.json())
            .then(data => setCards(data[0]['cards'))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className='dashboard section'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <Cards />
                        <div className="col-12">
                            <Reports />
                        </div>
                        <div className="col-12">
                            <RecentSales />
                        </div>
                        <div className="col-12">
                            <TopSelling />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport />
                    <WebTraffic />
                    <News />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
