console.log("Vue ok", Vue);
Vue.config.devtools = true;

//* Initialization of "Vue"
const app = new Vue({
    el: "#root",
    data: {
        emailList: [],
    },
    methods: {
        //// Function that generates a random email
        getRandomEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
                console.log(response);
                this.emailList.push(response.data.response);
            });
        }
    },
    //// Recall function to generate ten different emails
    created() {
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
        this.getRandomEmail();
    }
});