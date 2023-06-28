import React from "react";

export const MobileNavigation = ({ openMenu, handleClose }) => {
    return (
        <div>
            <nav className={`nav--mobile ${openMenu ? "" : "hidden"}`}>
                <ul>
                    <li>
                        <h2><a href="#">Home</a></h2>
                    </li>
                    <li>
                        <h2><a href="#">Bookmarks</a></h2>
                    </li>
                    <li>
                        <h2><a href="#">Settings</a></h2>
                    </li>
                </ul>
                <h2 className="nav--mobile-footer"><a href="#">Logout</a></h2>
            </nav>
        </div>
    )
}