import React from 'react';

// Represents a singular cafe, that can be 
// Bookmarked

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { AiOutlineCoffee, AiOutlineCloseSquare } from "react-icons/ai";

function Cafe({ cafe, onEdit, onDelete }) {
    return (
        <tr>
            <td>{cafe.name}</td>
            <td>{cafe.amountSpent}</td>
            <td>{cafe.dateVisited.slice(0,10)}</td>
            <td>{cafe.city}</td>
            <td>{cafe.rating}</td>
            <td>{cafe.comment}</td>

            {/* Update these icons to something that matches your style. */}
            <td><AiOutlineCloseSquare class="action-button" onClick={() => onDelete(cafe._id)} /></td>
            <td><AiOutlineCoffee class="action-button" onClick={() => onEdit(cafe)} /></td>
        </tr>
    );
}

export default Cafe;