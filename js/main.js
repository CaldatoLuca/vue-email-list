"use script";

const { createApp } = Vue;

const vueConfig = {
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      email: null,
      email2: null,
    };
  },
  created() {
    axios.get(this.apiUrl).then((response) => {
      this.email = response.data.response;
    });
    axios.get(this.apiUrl).then((response) => {
      this.email2 = response.data.response;
    });
  },
};

const myApp = createApp(vueConfig);
myApp.mount("#app");
