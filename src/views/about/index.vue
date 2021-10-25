<template>
  <div class="relative pt-14">
    <div class="absolute top-0 right-0 flex items-center justify-center w-full h-56">
        <p data-text="HI,RHODRI!" class="text-gray-900 text-4xl tracking-wide font-bold">HI,RHODRI!</p>
    </div>
    <div class="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto">
        <h3 class="titleBlock">關於</h3>
        <center>茫茫人海 
            <span class="inline-block pt-40 px-1 pb-2 ">遇見你</span> 
            真好
        </center>
            <Dialog />
        <center>
            <i class="inline-block mt-8 mb-12">Last updated in Jan. 20, 2021</i>
        </center>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Dialog from "./component/dialog/index.vue"


export default defineComponent({
  components:{Dialog},
  setup() {
    return {}
  },
});
</script>

<style scoped ></style>
