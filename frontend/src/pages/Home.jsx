        import MovieCard from "../components/MovieCard.jsx";
        import { useState } from "react";
        import "../CSS/Home.css";

        function Home(){
            const [searchQuery,setSearchQuery] =useState("");


       
        const movies =[
            {id: 1, title: "John Wick", release_date: "2020"},
            {id: 2, title: "HarryPotter", release_date: "2320"},
            {id: 3, title: "John ", release_date: "2020"},

        ]
        const handleSearch =(e) => {
            e.preventDefault()
            alert(searchQuery)
            setSearchQuery("-------")

        }

            return <div className="home">
                <form onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder="Search for movies..." 
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>

        <button type="submit" className="search-button">Search</button>

                </form>

                <div className="movies-grid">
                    {movies.map(movie => 
                   // movie.title.toLowerCase().startsWith(searchQuery) && 
                    
                    (<MovieCard movie={movie} key={movie.id}/>)
                )}
                </div>
            </div>
        }
        

        export default Home;