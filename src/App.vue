<template>
  <div className="font-sans flex flex-col justify-between h-screen">
    <Header></Header>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Footer className="mt-auto text-center flex-shrink-0"></Footer>
  </div>
</template>

<script lang="ts">

import Header from "@s/components/header/index.vue"
import Footer from "@s/components/footer/index.vue"
import { defineComponent } from "vue";

export default defineComponent({
  components:{
    Header,
    Footer
  },
  setup() {
    return {};
  },
});
</script>

<style>
@import '@s/theme/base.css';
</style>
