import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Box } from '@mui/system';
import Pelicula from './Pelicula';

export default function Carrusel({ titulo,peliculas }) {
    const [item1] = useState(peliculas.slice(0, (peliculas.length / 4)))
    const [item2] = useState(peliculas.slice((peliculas.length / 4), peliculas.length/2))
    const [item3] = useState(peliculas.slice((peliculas.length / 2),(peliculas.length/4*3)))
    const [item4] = useState(peliculas.slice((peliculas.length / 4*3), peliculas.length))

    return (
        <>
            <Box sx={{ fontSize: 30, color: "white", textAlign: 'left', m: "2rem", fontWeight: 'bold'}}>
                 {titulo}
            </Box>

            <Box sx={{ m: "1rem", width: 1800 }} >
                <Carousel variant="dark">
                    <Carousel.Item>
                        {
                            item1.map((peli, i) => (
                                <Pelicula key={i} pelicula={peli} />
                            ))
                        }
                    </Carousel.Item>
                    <Carousel.Item>
                        {
                            item2.map((peli, i) => (
                                <Pelicula key={i} pelicula={peli} />
                            ))
                        }
                    </Carousel.Item>
                </Carousel>
            </Box>
        </>
    )
}


