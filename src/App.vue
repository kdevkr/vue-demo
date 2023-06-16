<!--
  Composition API

  With Composition API, we define a component's logic using imported API functions. 
  In SFCs, Composition API is typically used with <script setup>. 
  The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate. 
  For example, imports and top-level variables / functions declared in <script setup> are directly usable in the template.
-->
<script setup>
import { ref, onMounted } from 'vue'

const current = ref(new Date())

onMounted(() => {
  console.log('onMounted', current.value)
})

import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <router-link to="/">Home</router-link> 
    <router-link to="/about" style="margin-left: 10px;">About</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://kdevkr.github.io" target="_blank">
      <img src="@/assets/mambo-logo.png" class="logo mambo" alt="Mambo logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.mambo:hover {
  filter: drop-shadow(0 0 2rem hsl(196, 55%, 36%));
}
</style>
