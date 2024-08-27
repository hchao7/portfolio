import React from 'react';

// Will be creating a row for each Cafe 
import Cafe from './Cafe';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function CafeList({ cafes, onDelete, onEdit }) {
    return (
        <table id="cafes">
            <caption>Cafe Log</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount Spent</th>
                    <th>Date Visited</th>
                    <th>City</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cafes.map((cafe, i) => 
                    <Cafe 
                        cafe={cafe} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default CafeList;
