import React, { useState, useRef } from 'react';
import Movie from "./Movie"


export default function MovieForm() {

    const [movies, setMovie] = useState([{
        id: ":(",
        title: "This is fine",
        grade: 5
    }]);

    const newTitle = useRef();
    const newGrade = useRef();

    function addMovie (event) {
        event.preventDefault()
        //if 
        console.log(newGrade.current.value)

        const newMovie = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        setMovie([...movies, {
            id: newMovie,
            title: newTitle.current.value,
            grade: newGrade.current.value
        }])
        //reset choices
        newGrade.current.value = "0";
        newTitle.current.value = "";
    }

    return (
        <div>
            <form>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="movie-title" ref={newTitle}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">Select rating</label>
                <select className="form-select" aria-label="Default select example" ref={newGrade}>
                    <option value="0" defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={addMovie}>Submit</button>
            
            </form>
            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie}/> ) }
            </ul>
        </div>
            
    )
};