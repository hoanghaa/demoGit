Vue.createApp({
    data() {
        return {
            activePage:0,
            theme: 'dark',
            buttonColor: 'light',
            pages: [
                {
                    link: { url: 'home.html', title: 'Home' },
                    pageTitle: "home page",
                    pageContent: 'This is a home page'
                }, 
                {
                    link: { url: 'about.html', title: 'About' },
                    pageTitle: "about page",
                    pageContent: 'This is a about page'
                }, 
                {
                    link: { url: 'contact.html', title: 'Contact' },
                    pageTitle: "Contact page",
                    pageContent: 'This is a contact page'
                }
            ]
        }
    },
    methods:{
        changeTheme(){
            let theme='light';
            if(this.theme=='light'){
                theme='dark';
            }
            this.theme=theme;
            console.log("changeTheme")
        },
        changeButtonColor(){
            let color='light';
            if(this.theme=='light'){
                color='dark';
            }
            this.buttonColor=color;
        }
    }
}).mount('#app')