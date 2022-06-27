import axios from "axios";
const APIKEY = '9d685410a24b244325470e5158229d37';

export const getPopular = async() => {
    const res = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`);
    return res.data;
} 
export const getTopRated = async() => {
    const res = await axios.get (`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`);
    return res.data;
} 
export const getNowPlaying = async() => {
    const res = await axios.get (`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`);
    return res.data;
} 
export const getDetailsById = async(id) => {
    const res = await axios.get (`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US&page=1`);
    return res.data;
}

