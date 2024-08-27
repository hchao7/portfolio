import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditCafePageForm = ({ cafeToEdit }) => {
 
    const [name, setName] = useState(cafeToEdit.name);
    const [amountSpent, setAmountSpent] = useState(cafeToEdit.amountSpent);
    const [dateVisited, setDateVisited] = useState(cafeToEdit.dateVisited.slice(0,10));
    const [city, setCity] = useState(cafeToEdit.city);
    const [rating, setRating] = useState(cafeToEdit.rating);
    const [comment, setComment] = useState(cafeToEdit.comment);

    
    const redirect = useNavigate();

    const editCafe = async () => {
        const response = await fetch(`/cafes/${cafeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                amountSpent: amountSpent, 
                dateVisited: dateVisited,
                city: city,
                rating: rating,
                comment: comment
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Cafe information has been successfully updated in the database.`);
        } else {
            const errMessage = await response.json();
            alert(`Cafe information could not be successfully updated, so check that all fields have been filled out. The response status is ${response.status}. Here is the error message: ${errMessage.Error}.`);
        }
        redirect("/pages/CafesPage.js");
    }

    return (
        <>
        <article>
            <h2>Edit a cafe</h2>
            <p>If you have an edit you’d like to make to your entry, make adjustments in the fields below. Make sure that all fields remain filled out, or else your updates cannot be saved. When you are finished editing, click the “Save” button.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which cafe are you updating?</legend>
                    <label htmlFor="name">Cafe name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label htmlFor="amountSpent">Amount spent</label>
                    <input
                        type="number"
                        value={amountSpent}
                        onChange={e => setAmountSpent(e.target.value)} 
                        id="amountSpent" />

                    <label htmlFor="dateVisited">Date Visited</label>
                    <input
                        type="date"
                        value={dateVisited}
                        onChange={e => setDateVisited(e.target.value)} 
                        id="dateVisited" />

                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                        id="city" />

                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        value={rating}
                        min="1"
                        max="5"
                        onChange={e => setRating(e.target.value)} 
                        id="rating" />

                    <label htmlFor="comment">Comment</label>
                    {/* <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)} 
                        id="comment" /> */}
                    <textarea 
                        value={comment}
                        onChange={e => setComment(e.target.value)} 
                        id="comment"
                    ></textarea>
                    <label class="no-dotted" htmlFor="submit">
                    <button
                        onClick={editCafe}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditCafePageForm;