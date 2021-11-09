const app=new Vue({
	el:"#product",
	data:{
		Name:'',
		Code:'',
		Price:'',
		Cant:'',
		Stock:'',
		productos:[
			{nombre: "Audifonos",
			 codigo: "JST123",
			 precio: "$230",
			 cantidad: "14",
			 status: true},

			{nombre: "Mouse",
			 codigo: "DTE284",
			 precio: "$120",
			 cantidad: "30",
			 status: true},

			{nombre: "Teclado",
			 codigo: "LTR309",
			 precio: "$485",
			 cantidad: "02",
			 status: true},

			{nombre: "WebCam",
			 codigo: "CDF001",
			 precio: "$254",
			 cantidad: "10",
			 status: true},

			{nombre: "USB",
			 codigo: "NCE662",
			 precio: "$87",
			 cantidad: "140",
			 status: true},

			{nombre: "Microfono",
			 codigo: "PKI156",
			 precio: "$521",
			 cantidad: "03",
			 status: true},

			{nombre: "Laptop",
			 codigo: "GYU238",
			 precio: "$16485",
			 cantidad: "05",
			 status: true},

			{nombre: "Bocina",
			 codigo: "BTZ489",
			 precio: "$139",
			 cantidad: "45",
			 status: true},

			{nombre: "Tablet",
			 codigo: "ÑPS547",
			 precio: "$6845",
			 cantidad: "29",
			 status: true},
		],
		busqueda:'',
		minimo:0,
	},
	methods:{
		agregar: function(){
			if(this.Name){
				this.productos.push({nombre:this.Name, ingrediente:this.Ingredients, tamaño:this.Size, precio:this.Price, status:this.Stock});
				this.Name='';
			}
			if(this.Code){
				this.productos.push({codigo:this.Code});
				this.Code='';
			}
			if(this.Cant){
				this.productos.push({cantidad:this.Cant});
				this.Cant='';
			}
			if(this.Price){
				this.productos.push({precio:this.Price});
				this.Price='';
			}
			if(this.Stock){
				this.productos.push({status:this.Stock});
				this.Stock='';
			} 
		}
	},

	computed:{
		buscarArticulo(){
			return this.productos.filter((prod)=>prod.nombre.includes(this.busqueda));
		},
		articulosEncontrados(){
			return this.buscarArticulo.length;
		}

	}
});