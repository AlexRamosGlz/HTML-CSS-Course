import React from "react";
import { useDispatch } from "react-redux";
import { ComponentCard } from "../../components/componentItem/ComponentCard.component";
import { RatingCircle } from "../../components/RatingCircle/RatingCircle.component";
import { openModal } from "../../util/modalSlice";

export function Content({ openNav, children }) {

  const dispatch = useDispatch();

  const handleOpenModal = () => { 
    dispatch(openModal())
  }

  return (
    <>
      <main className={openNav ? "nav-open content" : "content"}>
        <ul className="content-list">
          <li className="component--item">
            <ComponentCard onClick={handleOpenModal}>
              <a className="component--link" href="#">
                <img
                  src="img/expandable cards.gif"
                  className="component-gif"
                ></img>
                <h3 className="component--title">Expanding Cards</h3>
              </a>
              <RatingCircle rating={5}/>
            </ComponentCard>
          </li>
          <li className="component--item">
            <ComponentCard onClick={handleOpenModal}>
              <a className="component--link" href="#">
                <img
                  src="img/expandable cards.gif"
                  className="component-gif"
                ></img>
                <h3 className="component--title">Expanding Cards</h3>
              </a>
              <RatingCircle rating={3}/>
            </ComponentCard>
          </li>
          <li className="component--item">
            <ComponentCard onClick={handleOpenModal}>
              <a className="component--link" href="#">
                <img
                  src="img/expandable cards.gif"
                  className="component-gif"
                ></img>
                <h3 className="component--title">Expanding Cards</h3>
              </a>
              <RatingCircle rating={9}/>
            </ComponentCard>
          </li>
        </ul>
      </main>
    </>
  );
}
