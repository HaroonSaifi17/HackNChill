import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";

function Event() {
  const initialSelectedCard = {
    id: 1,
    title: "Card 1",
    content: "Content for Card 1",
  };
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const cards = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
  ];

  const handleCardClick = (card) => {
    console.log(`Selected card: ${card.id}`);
    setSelectedCard(card);
  };
  return (
    <>
      <div className="page-layout">
        <div className="card-layout">
          <div className="selected-card-content">
            <h3 className="event-title">EVENTS</h3>
            {selectedCard && (
              <div>
                <Card className="selected-card-details">
                  <Card.Body>
                    <Card.Title>{selectedCard.title}</Card.Title>
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
                      selectedCard.id === card.id ? "	#8B0000" : "#4d4d4d",
                  }}
                >
                  <Card
                    className={`cursor-pointer individual-cards ${
                      selectedCard.id === card.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
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
