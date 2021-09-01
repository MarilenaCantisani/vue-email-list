console.log("Vue ok", Vue);
Vue.config.devtools = true;

//// Initialization of "Vue"
const app = new Vue({
    el: "#root",
    data: {
        email: "",
    },
    methods: {
    },
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
            console.log(response);
            this.email = response.data.response;
        });
    }
});