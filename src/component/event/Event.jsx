import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";

function Event() {
  const initialSelectedCard = {
    id: 1,
    title: "Card 1",
    content: "Content for Card 1",
    img: "https://placehold.it/1000",
  };
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "Content for Card 1",
      img: "https://placehold.it/1000",
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content for Card 2",
      img: "https://placehold.it/1000",
    },
    {
      id: 3,
      title: "Card 3",
      content: "Content for Card 3",
      img: "https://placehold.it/1000",
    },
    {
      id: 4,
      title: "Card 4",
      content: "Content for Card 4",
      img: "https://placehold.it/1000",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <>
      <div id="event" className="page-layout py-16">
        <div className="card-layout">
          <div className="selected-card-content">
            <h3 className="event-title">EVENTS</h3>
            {selectedCard && (
              <div>
                <Card
                  className="selected-card-details bg-center bg-cover"
                  style={{ backgroundImage: `url(${selectedCard.img})` }}
                >
                  <Card.Body>
                    <Card.Title className="text-4xl font-semibold text-red-950 uppercase">
                      {selectedCard.title}
                    </Card.Title>
                    <Card.Text>{selectedCard.content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>

          <div
            className={`card-sidebar ${selectedCard ? "selected-sidebar" : ""}`}
          >
            <div className="card-container">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="individual-card-container"
                  style={{
                    backgroundColor:
                      selectedCard.id === card.id ? "#8B0000" : "#1f2937",
                  }}
                >
                  <Card
                    style={{ backgroundImage: `url(${card.img})` }}
                    className={`cursor-pointer bg-center individual-cards bg-cover ${
                      selectedCard.id === card.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <Card.Body>
                      <Card.Title className="text-red-950 font-semibold">
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
