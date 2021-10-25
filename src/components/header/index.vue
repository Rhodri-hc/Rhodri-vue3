<template>
    <div class="fixed z-10 w-full h-16 bg-gray-200 bg-opacity-50 shadow flex items-center">
        <div class="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto text-red-900 flex items-center justify-between ">
            <i class="inline-block text-base sm:text-lg md:text-xl lg:text-2xl">
            Rhodri's Blog
            </i>

            <div class="flex mr-1 sm:mr-1 md:mr-4 text-xs sm:text-sm  md:text-base">
            <div 
                class="flex flex-col mr-3 sm:mr-3 md:mr-6 px-1  py-2 cursor-pointer hover:bg-opacity-25 hover:bg-gray-300 "
                @click="clickTitle('artitle')"
            >
                <p class="titleNav">文章</p>
                <span class="text-red-800">ARTICLE</span>
            </div>
            <div 
                class="flex flex-col mr-3 sm:mr-3 md:mr-6 px-1  py-2 cursor-pointer hover:bg-opacity-25 hover:bg-gray-300"
                @click="clickTitle('about')"
            >
                <p class="titleNav">關於</p>
                <span class="text-red-800">ABOUT</span>
            </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup(props, {emit}) {
    
    // 点击nav标签
    function clickTitle(title: string){
        emit("changeRoute",title)
    }

    return {
        clickTitle
    }
  },
});
</script>

<style scoped >
</style>