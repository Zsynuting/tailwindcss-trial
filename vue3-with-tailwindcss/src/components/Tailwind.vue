<template>
  <button
    :class="classObj"
    @click="handleClick"
  >点击</button>
  <div>Count: {{ flag }}</div>
  <div>Count * 2: {{ count2 }}</div>
</template>

<script lang="ts">
import { ref, computed } from "vue";

export default {
  setup() {
    const flag = ref(true);
    const count2 = computed(() => (flag.value ? "true" : "false"));
    const classObj = computed(() => ({
      "text-blue-500": true,
      "bg-gray-50": flag.value,
      "bg-gray-500": !flag.value,
    }));
    const abc = "bg-red-50"
    return {
      abc,
      flag,
      count2,
      classObj,
      handleClick: () => {
        flag.value = !flag.value;
      },
    };
  },
};
</script>