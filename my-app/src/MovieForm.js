import React, { useState, useRef } from 'react';
import Movie from "./Movie"


export default function MovieForm() {
    const [movies, setMovie] = useState([{
        id: 1,
        title: "wat",
        grade: 0
    }]);

    return (
        <div>
            <form>
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" id="movie-title"></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Select rating</label>
                <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            
            </form>
            <ul class="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie}/> ) }
            </ul>
        </div>
            
    )
};