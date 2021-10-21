<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  
</template>

<script lang="ts">

import Header from "@s/components/header/index.vue"
import { defineComponent } from "vue";

export default defineComponent({
  components:{
    Header
  },
  setup() {
    return {};
  },
});
</script>

<style>
</style>
