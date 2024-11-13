// src/lib/store.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(Number(localStorage.getItem('counter')) || 0)

  function increment() {
    count.value++
    localStorage.setItem('counter', count.value)
  }

  function decrement() {
    count.value--
    localStorage.setItem('counter', count.value)
  }

  return { count, increment, decrement }
})
