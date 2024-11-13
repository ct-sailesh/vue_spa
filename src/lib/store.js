import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    returnedId: null, // Initial value for returnedId
  }),
  actions: {
    setReturnedId(id) {
        alert(id);
      this.returnedId = id; // Set the value of returnedId
    },
  },
});