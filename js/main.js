"use script";

const { createApp } = Vue;

const vueConfig = {
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      email: null,
    };
  },
  created() {
    axios.get(this.apiUrl).then((response) => {
      this.email = response.data.response;
    });
  },
};

const myApp = createApp(vueConfig);
myApp.mount("#app");
