<template>
  <div>Capacity: {{ capacity }}</div>
</template>

<script>
import { ref } from "vue"

export default {
  // Vue 2 way
  // data() {
  //     return {
  //         capacity: 3
  //     }
  // }

  // Setup execuates before basically everything else.
  // Doesn't have access to this.
  // first argument can use `props`.
  // second argument is `context` replacement for this.
  setup() {
    const capacity = ref(3)
    return { capacity }
  }
}
</script>