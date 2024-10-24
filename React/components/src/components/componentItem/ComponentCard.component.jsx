import React from "react";

export function ComponentCard({onClick, children}) {
    
    return (
        <div className="component-card" onClick={onClick}>
            <div className="children">{children}</div>
        </div>
    )
}