"use script";

const { createApp } = Vue;

const vueConfig = {
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
    };
  },
  methods: {
    condition() {
      if (this.emails.length === 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then((response) => {
        this.emails.push(response.data.response);
      });
    }
  },
};

const myApp = createApp(vueConfig);
myApp.mount("#app");
