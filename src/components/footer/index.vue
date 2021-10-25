<template>
    <div class="pt-15 pb-5 flex flex-col items-center text-sm opacity-75 ">
        <div class="relative inline-flex justify-center">
            <span class="pr-2">Crafted With</span>
            <i class="createrHeart" /> 
            <span class="pl-2">BY Rhodri</span>
        </div>
        <h5 class="pt-1 pl-4">2021.01 - {{getNowYearMonth()}} </h5>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';


export default defineComponent({
  setup() {
        // 获取当前年月
    function getNowYearMonth(){
        const nowDate = new Date();
        const year = nowDate.getFullYear();
        const month = nowDate.getMonth() + 1;
        
        
        return month < 10 ? `${year}.0${month}` : `${year}.${month}`
    }

    return {
        getNowYearMonth
    }
  },
});
</script>

<style scoped >
@import "./index.css";
</style>