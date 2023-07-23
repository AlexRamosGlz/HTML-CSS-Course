import React from "react";


export function Content({ navOpen }) {
  return (
    <>
      <main className="content" style={navOpen ? { marginLeft: "25.5rem" } : {}}>
        <ul className="content-list">
          <li className="component--item">
            <a className="component--link" href="#">
              <img
                src="img/expandable cards.gif"
                className="component-gif"
              ></img>
              <h3 className="component--title">Expanding Cards</h3>
            </a>
          </li>
          <li className="component--item">
            <a className="component--link" href="#">
              <img
                src="img/omnifood.gif"
                className="component-gif"
              ></img>
              <h3 className="component--title">Omnifood</h3>
            </a>
          </li>
          <li className="component--item">
            <a className="component--link" href="#">
              <img
                src="img/omnifood.gif"
                className="component-gif"
              ></img>
              <h3 className="component--title">Omnifood</h3>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
