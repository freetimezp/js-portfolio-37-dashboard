import React, { useState, useEffect } from 'react';

import Card from './Card';

function Cards() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('https://christmas-04.onrender.com/dashboard')
            .then(res => res.json())
            .then(data => setCards(data[0]['cards']))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {cards && cards.length > 0 && cards.map(card => (
                <Card key={card._id} card={card} />
            ))}
        </>
    );
};

export default Cards;
