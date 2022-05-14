import React, { useState, useRef } from 'react';
import Movie from "./Movie"

export default function MovieForm() {

    const [movies, setMovie] = useState([{
        id: 1,
        title: "This is fine",
        grade: "1"
    }]);

    const newTitle = useRef();
    const newGrade = useRef();

    function addMovie (event) {
        event.preventDefault()        

        const newMovie = movies.length > 0 ? movies.length + 1 : 1;
//        const newMovie = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        
        setMovie([...movies, {
            id: newMovie,
            title: newTitle.current.value,
            grade: newGrade.current.value
        }])
        //reset choices
        newGrade.current.value = "0";
        newTitle.current.value = "";
    }

    function deleteMovie (index) {
        setMovie(movies => movies.filter((item) => item.id !== index));
    };

    function orderMoviesAlphaB() {
        
        let newAlphabeticalList = [...movies].sort((a, b) => a.title.localeCompare(b.title))
        console.log(newAlphabeticalList)
        setMovie( newAlphabeticalList)
    };
    
    function orderMoviesRating() {
        let newRatedList = [...movies].sort((a, b) => a.grade.localeCompare(b.grade))
        console.log(newRatedList);
        setMovie(newRatedList)
    };
    

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
            <button type="button" className='btn btn-success' onClick={orderMoviesAlphaB}>Order the movies by title</button>
            <button type="button" className='btn btn-success' onClick={orderMoviesRating}>Order the movies by rating</button>


            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie}/> ) }
            </ul>
        </div>
            
    )
};

