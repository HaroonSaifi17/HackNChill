import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";

function Event() {
  const initialSelectedCard = {
    id: 1,
    title: "",
    content: "",
    img: "/assets/Event/HackNSolve.webp",
  };
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const cards = [
    {
      id: 1,
      img: "/assets/Event/HackNSolve.webp",
    },
    {
      id: 2,
      img: "/assets/Event/Bid-O-Mania.webp",
    },
    {
      id: 3,
      img: "/assets/Event/RoboWar.webp",
    },
    {
      id: 4,
      img: "/assets/Event/GamingArena.webp",
    },
    {
      id: 5,
      img: "/assets/Event/GuestSpeakerSession.webp",
    },
  ];
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <>
      <div id="event" className="page-layout ">
        <div className="card-layout">
          <div className="selected-card-content">
            <h3 className="text-white text-center w-full py-5 px-[5vw]  font-semibold text-5xl font-ubuntu">
              EVENTS
            </h3>
            {selectedCard && (
              <div className="scard">
                <Card
                  className="selected-card-details bg-center bg-cover"
                  style={{ backgroundImage: `url(${selectedCard.img})` }}
                >
                  <Card.Body></Card.Body>
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
                    className={`cursor-pointer bg-center individual-cards bg-cover  ${
                      selectedCard.id === card.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <Card.Body></Card.Body>
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
