import axios from 'axios';

    const api = axios.create({
        baseURL: "https://covid-193.p.rapidapi.com/"
});

export default api;