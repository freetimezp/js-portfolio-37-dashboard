import React, { useState, useEffect } from 'react';
import './news.css';
import CardFilter from './CardFilter';
import NewsPostItem from './NewsPostItem';

function News() {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('https://christmas-04.onrender.com/dashboard')
            .then(res => res.json())
            .then(data => setNews(data[0]['news']))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='card'>
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className='card-title'>
                    News &amp; Updates <span>| {filter}</span>
                </h5>

                <div className="news">
                    {news && news.length > 0 && news.map(item => (
                        <NewsPostItem key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
