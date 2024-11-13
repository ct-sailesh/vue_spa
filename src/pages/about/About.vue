<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import { useCounterStore  } from '../../lib/store';
const counterStore = useCounterStore();
counterStore.increment()
</script>

<template src="./about.html"></template>
<script>
export default {
  components: {
    TopNavbar,
    Footer,
  },
  data() {
    return {
    };
  }
};
</script>