import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddCafePageForm = () => {

    const [name, setName]       = useState('');
    const [amountSpent, setAmountSpent]         = useState('');
    const [dateVisited, setDateVisited] = useState('');
    const [city, setCity] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    
    
    const redirect = useNavigate();

    const addCafe = async () => {
        const newCafe = { name, amountSpent, dateVisited, city, rating, comment };
        const response = await fetch('/cafes', {
            method: 'post',
            body: JSON.stringify(newCafe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Cafe has been successfully added to the database.`);
            redirect("/pages/CafesPage.js");
        } else {
            alert(`The response status is ${response.status} and the cafe could not be added to the database, so make sure that all fields have been filled out.`);
            redirect("/create");
        }
    };


    return (
        <>
        <article>
            <h2>Add a cafe</h2>
            <p>Do you also enjoy cafe-hopping? Feel free to add an entry for your favorite cafe. All the fields are required so make sure to fill everything out. Click the “Add” button when you are finished.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which cafe are you adding?</legend>
                    <label htmlFor="name">Cafe name</label>
                    <input
                        type="text"
                        placeholder="Ex. Coffee Time"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label htmlFor="amountSpent">Amount spent</label>
                    <input
                        type="number"
                        value={amountSpent}
                        placeholder="Ex. 20"
                        onChange={e => setAmountSpent(e.target.value)} 
                        id="amountSpent" />

                    <label htmlFor="dateVisited">Date Visited</label>
                    <input
                        type="date"
                        placeholder="Date you visited cafe"
                        value={dateVisited}
                        onChange={e => setDateVisited(e.target.value)} 
                        id="dateVisited" />
                    
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        placeholder="Ex. San Jose"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                        id="city" />

                    <label htmlFor="rating">Rating (enter a value from 1 to 5)</label>
                    <input
                        type="number"
                        value={rating}
                        min="1"
                        max="5"
                        placeholder="1"
                        onChange={e => setRating(e.target.value)} 
                        id="rating" />
                    
                    <label htmlFor="comment">Comment</label>
                    {/* <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)} 
                        id="comment" /> */}
                    <textarea 
                        placeholder="Ex. This cafe was great! I recommend the cappuccino."
                        value={comment}
                        onChange={e => setComment(e.target.value)} 
                        id="comment"
                    ></textarea>
                    <label class="no-dotted" htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addCafe}
                        id="submit"
                    >Add Cafe</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddCafePageForm;