import '../../App.css';
import React, {useState, useEffect }from 'react';
import Navbar from '../Navbar.js';
import Slider from '../Slider';
import Carrusel from '../Carrusel';
import Footer from '../Footer.js';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { getNowPlaying, getPopular, getTopRated } from '../../helper/fetch';

function Home() {
  const [popular, SetPopular] = useState([])
  const [topRated, SetTopRated] = useState([])
  const [nowPlaying, SetNowPlaying] = useState([])
  useEffect(()=>{
    (async ()=> {
      const movies = await getPopular();
      SetPopular(movies);
      const moviesTopRated = await getTopRated();
      SetTopRated(moviesTopRated);
      const moviesNowPlaying = await getNowPlaying();
      SetNowPlaying(moviesNowPlaying);
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Slider />
            {popular.length ===0 && <div>
              <Stack spacing={1}>
              <Skeleton variant="rectangular" width={210} height={118} />
              </Stack>
              </div>}
            {popular.results && <Carrusel titulo="Populares" peliculas={popular.results} />}
            {topRated.length ===0 && <div>Loading....</div>}
            {topRated.results && <Carrusel titulo="Mejor Valoradas" peliculas={topRated.results} />}
            {nowPlaying.length ===0 && <div>Loading....</div>}
            {nowPlaying.results && <Carrusel titulo="Tendencias" peliculas={nowPlaying.results} />}

            <Footer />
    </div>
  );
}
export default Home;

