new Vue({
    el:'#app',
    data:{
        // creo un array che chiamo mails che conterrà le 10 mail che dovrò inserire tramite API
        mails:[]
    },
    // quando html sarà "montato" nel browser fai chiamata api
    mounted(){
        // da 0 a 10 prendi mail dall'api tramite axios e pusha il suo data.response dentro l'array dichiarato sopra
        for(let i=0;i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                this.mails.push(result.data.response)
            })
        }
    }
})