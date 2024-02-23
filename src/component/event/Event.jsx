import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Event.css";

function Event() {
  const initialSelectedCard = {
    id: 1,
    title: "HackNSolve",
    content: "",
    img: "/assets/Event/HackNSolve.png",
  };
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const cards = [
    {
      id: 1,
      title: "HackNSolve",
      content: "",
      img: "/assets/Event/HackNSolve.png",
    },
    {
      id: 2,
      title: "Bid-O-Mania",
      content: "",
      img: "/assets/Event/Bid-O-Mania.png",
    },
    {
      id: 3,
      title: "RoboWar",
      content: "",
      img: "/assets/Event/RoboWar.png",
    },
    {
      id: 4,
      title: "Gaming Arena",
      content: "",
      img: "/assets/Event/GamingArena.png",
    },
    {
      id: 5,
      title: "Speaker Session",
      content: "",
      img: "/assets/Event/GuestSpeakerSession.png",
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
            <h3 className="text-white text-center w-full py-5 px-[5vw]  font-semibold text-5xl font-ubuntu">EVENTS</h3>
            {selectedCard && (
              <div>
                <Card
                  className="selected-card-details bg-center bg-cover"
                  style={{ backgroundImage: `url(${selectedCard.img})` }}
                >
                  <Card.Body>
                    <Card.Title className="text-4xl font-semibold text-red-950 uppercase text-white">
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
                    className={`cursor-pointer bg-center individual-cards bg-cover  ${
                      selectedCard.id === card.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <Card.Body>
                      <Card.Title className="text-red-950 font-semibold text-white">
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
