<script setup>
import { getReq, postReq } from '../../lib/service';
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import { watch } from 'vue'
import { useCounterStore  } from '../../lib/store';
const counterStore = useCounterStore();
counterStore.increment();
</script>

<template src="./home.html"></template>

<script>
export default {
  components: {
    TopNavbar,
    Footer,
  },

  data() {
    return {
      appname: this.$env.VITE_APP_NAME,
      postData: {
        key: 'value',
      },
      returnedId:null,
    };
  },
  methods: {

    

    async makePostRequest() {
      try {
        const response = await postReq('/products', this.postData); 
        console.log('POST request successful:', response.id);
        this.returnedId = responsse.id;
      } catch (error) {
        throw error;
      }
    },

  }

};
</script>