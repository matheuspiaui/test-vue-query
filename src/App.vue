<script>
import { defineComponent } from "vue";
import { useQueryProvider } from "vue-query";
import { VueQueryDevTools } from "vue-query/devtools";

import TodosList from "./components/TodosList.vue";

export default defineComponent({
  name: "App",
  components: { TodosList, VueQueryDevTools },
  setup() {
    useQueryProvider();
  },
});
</script>

<template>
  <h1>Vue Query - Exemplo 😉</h1>
  <TodosList />
  <VueQueryDevTools :initialIsOpen="false" />
</template>
