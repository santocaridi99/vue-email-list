new Vue({
    el:'#app',
    data:{
        // creo un array che chiamo mail che conterrà le 10 mail che dovrò inserire tramite API
        mails:[]
    },
    mounted(){
        for(let i=0;i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                this.mails.push(result.data.response)
            })
        }
    }
})