<template>
    <draggable>
        <div class="ultraman handle z-20 w-12 md:w-16 h-12 md:h-16 fixed inset-y-0 left-0 bg-contain rounded-full border-2 border-gray-400 shadow-xl cursor-pointer inline-block"></div>
    </draggable>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
// 引入
import draggable from "vuedraggable";


export default defineComponent({
  components:{
      draggable
  },
  setup() {
    return {
    }
  },
});
</script>

<style scoped >
@import "./index.css";
</style>