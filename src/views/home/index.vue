<template>
   <div class="relative pt-14">
        <div class="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto">
            <h3 class="titleBlock">文章</h3>

            <div class="flex flex-col items-center mt-10 lg:mt-16">
                <div class="flex rounded-lg overflow-hidden  h-48 lg:h-56  w-full  md:w-10/12 lg:w-9/12 shadow-lg  cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition duration-700 ease-in-out">
                    <img class="inset-0 w-1/2 h-full object-cover" alt="" src="@s/assets/images/qi.jpg" />
                    <div class="p-6 md:p-8 text-xs lg:text-sm">
                      <p class="text-sm sm:text-lg md:text-xl font-medium pb-4">让生活过得更好</p> 
                      <p class="hiddenText text-gray-500">一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好</p>
                      <div class="flex items-center  justify-between  px-0 lg:px-2 pt-7"> 
                          <span class="rounded-full py-0 lg:py-1  px-1 lg:px-2 border border-red-300 text-red-300">生活向</span>
                          <span class="text-red-900">2021.03.15</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    return {
      
    }
  },
});
</script>

<style scoped >
@import "./index.css";
</style>
