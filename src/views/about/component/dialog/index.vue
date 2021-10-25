<template>
    <div class="mHeight md:w-4/5 mx-auto bg-gray-300 bg-opacity-25 rounded-md p-2">
        <center>
            <h4>與
                <i class="inline-block px-2 mt-2">Rhodri</i>
                對話中...
            </h4>
        </center>
        <div class="text-xs sm:text-xs md:text-base  w-full h-full overflow-y-auto overflow-x-hidden">
            <div class="py-3 md:pl-3">
                 <div class="m-2" key={item.id}>
                    <div class="max-w-3/4 inline-block py-2 px-4 rounded-lg text-gray-700 bg-gray-200 leading-snug">
                        <span>你好</span>
                    </div>
                </div>
            </div>
            <div class="py-3 pr-3 md:pr-5 text-right">
                <button class="btStyle py-1 md:py-2 px-2 md:px-3"> 然後呢？ 😃</button>
                <button class="btStyle py-1 md:py-2 px-2 md:px-3"> 少廢話！ 🙄</button>
            </div>
            <div class='dialog-message__youself'></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';


export default defineComponent({
  components:{},  
  setup() {
    return {}
  },
});
</script>

<style scoped >
@import "./index.css"
</style>
