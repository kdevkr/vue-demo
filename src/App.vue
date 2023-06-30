<!--
  Composition API

  With Composition API, we define a component's logic using imported API functions. 
  In SFCs, Composition API is typically used with <script setup>. 
  The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate. 
  For example, imports and top-level variables / functions declared in <script setup> are directly usable in the template.
-->
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useLoading } from 'vue-loading-overlay'
import Header from '@/components/TopHeader.vue'

const $loading = useLoading()
const current = ref(new Date())

onMounted(() => {
  const loader = $loading.show({
    transition: 'fade',
    loader: 'bars',
    opacity: 0.6,
    'background-color': '#dedede'
  })
  
  console.log('onMounted', current.value)

  nextTick(() => {
    if (loader) {
      setTimeout(() => loader.hide(), 3000)
    }
  })
})
</script>

<template>
  <Header/>
  <main class="px-3 py-2">
    <router-view></router-view>
  </main>
</template>