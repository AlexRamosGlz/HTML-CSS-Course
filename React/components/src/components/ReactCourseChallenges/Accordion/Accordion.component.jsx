import React, { useState } from "react";

export function Accordion({ data }) {

  const [currOpen, setCurrOpen ] = useState(1);

  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  const handleCurrent = (index) => {

    if(index === currOpen) return setCurrOpen(0)
    setCurrOpen(index)
  }

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem index={index + 1} title={faq.title} handleCurrent={handleCurrent} currOpen={currOpen}>
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ index, handleCurrent, children, currOpen, title }) {
  return (
    <div className={currOpen === index ? "accordion--item active" : "accordion--item"}>
      <p className="index">0{index}</p>
      <h2 className="tittle">{title}</h2>
      <button onClick={() => handleCurrent(index)} className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon icon--expand"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="children">{children}</div>
    </div>
  );
}
