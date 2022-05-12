import React, { useState, useRef } from 'react';
import Movie from "./Movie"


export default function MovieForm() {

    const [movies, setMovie] = useState([{
        id: 1,
        title: "wat",
        grade: 0
    }]);

    const newMovie = useRef()

    const addMovie = (event) => {
        event.preventDefault()
        console.log(newMovie.current.value)
    }

    return (
        <div>
            <form>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="movie-title" ref={newMovie}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Select rating</label>
                <select className="form-select" aria-label="Default select example">
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