import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCsrfStore = defineStore('csrf', () => {
  const csrf = ref({})
  const token = computed(() => csrf.value.token)

  async function getCsrf() {
    const res = await axios.get('/csrf')
    csrf.value = res.data
    return res.data
  }

  return { csrf, token, getCsrf }
})
