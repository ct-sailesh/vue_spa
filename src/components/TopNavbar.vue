<template>
  <router-link to="/">Home</router-link>
  <router-link to="/listings">Listings</router-link>
  <router-link to="/about">About</router-link>
  <p>Returned ID: {{ returnedId }}</p>
</template>

<script setup>
defineProps({
  returnedId: {
    type: [String, Number],
    default: null,
  },
});
</script>

