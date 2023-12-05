"use script";

const { createApp } = Vue;

const vueConfig = {
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
      closeEnvelope: true,
      openEnvelope: false,
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
    readEmail() {
      if (this.closeEnvelope === true && this.openEnvelope === false) {
        this.closeEnvelope = false;
        this.openEnvelope = true;
      } else {
        this.closeEnvelope = true;
        this.openEnvelope = false;
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
