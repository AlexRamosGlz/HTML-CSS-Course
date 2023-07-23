import React, {useState} from "react";

export function DateCounter() {

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function getDateFormated() {
        const date = new Date();
        
        const dateFormated = `${date.getUTCDay()}/${date.getMonth()}/${date.getFullYear()}`
    
        return (
            <section>
                <p>{count > 0 ? `${count} days from today is ${dateFormated}` : `${Math.abs(count)} days ago was ${dateFormated}`}</p>
            </section>
        )
    }

    return (
        <div className="date-counter">
            <ul className="counter-list">
                <li className="counter-item">
                    <button className="btn" onClick={() => setStep(step => step - 1)}>&minus;</button>
                    <span>{`Step: ${step}`}</span>
                    <button className="btn" onClick={() => setStep(step => step + 1)}>+</button>
                </li>
                <li className="counter-item">
                    <button className="btn" onClick={() => setCount(count => count - step)}>&minus;</button>
                    <span>{`Count: ${count}`}</span>
                    <button className="btn" onClick={() => setCount(count => count + step)}>+</button>
                </li>
            </ul>

            {getDateFormated()}
        </div>
    )
}