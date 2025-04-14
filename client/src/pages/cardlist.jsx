import React from 'react';
import Card from './card'; // Adjust the path as necessary

const App = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    const cardsData = [
        {
            title: 'Card 1',
            description: 'This is the description for card 1.',
            imgSrc: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
            title: 'Card 2',
            description: 'This is the description for card 2.',
            imgSrc: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
            title: 'Card 3',
            description: 'This is the description for card 3.',
            imgSrc: '', // No image for this card
        },
    ];

    return (
        <div className="card-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imgSrc={card.imgSrc}
                    onButtonClick={handleButtonClick}
                />
            ))}
        </div>
    );
};

export default App;