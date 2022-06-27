import React from 'react'
import { Link } from 'react-router-dom'


export default function Pelicula({ pelicula }) {
    return (
        <Link to={`/${pelicula.id}`}>
            
            <img width={250} height={300} alt="900x500" src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`} />
        </Link>
    )
}
