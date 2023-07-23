import React, { useState } from "react";

export default function FlashCards() {
  const [selected, setSelected] = useState(0);

  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];

  const showAnswer = (e) => {
    debugger;

    setSelected(e.target.id);
  };

  return (
    <section className="flash-cards">
      <ul className="card-list">
        {questions.map((question) => (
          <Card
            id={question.id}
            answer={question.answer}
            question={question.question}
            key={question.id}
            onClick={showAnswer}
            isSelected={selected}
          />
        ))}
      </ul>
    </section>
  );
}

function Card({ id, question, answer, onClick, isSelected }) {
  return (
    <li
      className={Number(isSelected) === id ? "card selected" : "card"}
      onClick={onClick}
      id={id}
    >
      {Number(isSelected) === id ? answer : question}
    </li>
  );
}
