import axios from "axios";
import { useMutation, useQueryClient } from "vue-query";


const BASE_URL = `http://localhost:3000`

const setTodo = async (todo) => {
    await axios.post(`${BASE_URL}/todos`, {
        todo,
        done: false
    })
}


export const useAddTodoMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(setTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('key-todos')
        }
    })
}
