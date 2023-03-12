import tabla from "./tabla.js";
export default {
    name : document.querySelector("#formulario"),
    data: [],
    Enviar(){
        this.name.addEventListener("submit",(e)=>{
            this.data.push(Object.fromEntries(new FormData (e.target)))
            e.preventDefault();
            console.log(this.data); 
            this.name.reset();
            tabla.Nota();
            this.data=[]
        })

    } 

    }