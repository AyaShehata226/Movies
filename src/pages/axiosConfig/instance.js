import axios from 'axios';
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        api_key: "04b2c0ab702b8e25b551aaab1c1a7d0b",
    //     page: currentPage,
      },
})

export default instance;