<script setup>
import { useCounterStore  } from '../lib/store';
const counterStore = useCounterStore();
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/listings">Listings</router-link>
  <router-link to="/about">About</router-link>
  <p>Returned ID: {{ returnedId }}</p>
  <p>Header comp Count: {{counterStore.count}}</p>
</template>