import React, { useState, useEffect } from 'react';
import './recentSales.css';

import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';

function RecentSales() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('https://christmas-04.onrender.com/dashboard')
            .then(res => res.json())
            .then(data => setItems(data[3]['recentsales']))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='card recent-sales overflow-auto'>
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className='card-title'>
                    Recent Sales <span>| {''}</span>
                </h5>
                <RecentSalesTable items={items} />
            </div>
        </div>
    );
};

export default RecentSales;
