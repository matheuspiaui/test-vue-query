import axios from "axios";
import { useQuery } from "vue-query";


// const BASE_URL = `https://jsonplaceholder.typicode.com`
const BASE_URL = `http://localhost:3000`

const fetchTodos = async () => {

    const { data } = await axios.get(`${BASE_URL}/todos`)

    // console.log('data: ', data.data.children);
    // console.log('data with images: ', data.data.children.filter((post) => hasImage(post)));


    return data
}


export const useFetchTodosQuery = () => {
    return useQuery('key-todos', () => fetchTodos())
}
