<template>
  <div class="font-sans flex flex-col justify-between h-screen">
    <Header @changeRoute="changeRoute"></Header>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Footer class="mt-auto text-center flex-shrink-0"></Footer>
  </div>
</template>

<script lang="ts">

import Header from "@s/components/header/index.vue"
import Footer from "@s/components/footer/index.vue"
import { defineComponent } from "vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  components:{
    Header,
    Footer
  },
  setup() {
    let router = useRouter();

    // 点击标签切换路由
    function changeRoute(name:string){
      router.push({path: `/${name}` })
    }

    return {
      changeRoute
    };
  },
});
</script>

<style>
@import '@s/theme/base.css';
</style>
