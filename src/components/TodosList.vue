<script>
import { defineComponent } from "vue";
import { useAddTodoMutation } from "../hooks/useAddTodoMutation";
import { useFetchTodosQuery } from "../hooks/useFetchTodosQuery";



export default defineComponent({
  name: "Todos",
  data() {
    return {
      newTodo: ''
    }
  },
  setup() {
    const { isLoading, isError, isFetching, data, error, refetch } = useFetchTodosQuery()
    
    const useAddTodo = useAddTodoMutation()

    function addNewTodo() {
      useAddTodo.mutate(this.newTodo)
    }


    return { isLoading, isError, isFetching, data, error, refetch , addNewTodo};
  }
});
</script>

<template>
  <button @click="refetch" :disabled="isFetching">{{ isFetching ? "Refetching..." : "Refetch" }}</button>
  <h2>TODO list</h2>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        <input type="checkbox" v-model="item.done" />
        {{ item.todo }}
      </li>
    </ul>
  </div>

  <div>
    <input v-model="newTodo" placeholder="New Todo" />
    <button @click="addNewTodo">Add</button>
  </div>
</template >
