import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../util/modalSlice";

export function Modal({ open, children, tittle = "" }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, []);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={open ? "modal" : "hidden modal"} onClick={handleClose}>
      <aside className="modal--content">
        <header className="modal--header">
          <h2>{tittle}</h2>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon modal--icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        {children}

        <div className="buttons">
          <button className="btn btn--modal" onClick={handleClose}>
            View Demo
          </button>
        </div>
      </aside>
    </div>
  );
}
