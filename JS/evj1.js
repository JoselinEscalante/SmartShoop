Vue.component("alerta", {
    props: ['tipo', 'posicion','frase','listado'],
    template: "#mensajeAlerta",
    methods: {
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
    data() {
        return {
            alerta: this.frase
        };
    }
});
const app = new Vue({
    el: "#cont",
    data: {
        tipos:['Error 1','Error 2','Error 3'],
        mostrarBienvenida: false,
        mostrarProximos: false,
        mostrarRedes: false,
        mostrarLogotipo: false
    }
});
