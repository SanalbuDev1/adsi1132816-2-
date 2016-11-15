
	
	var emarca=document.getElementById('emarca');
	var ereferencia=document.getElementById('ereferencia');
	var emodelo=document.getElementById('emodelo');
	var eimagen=document.getElementById('eimagen');
	var ecilindraje=document.getElementById('ecilindraje');
	

	var Vehiculo = {
		//atributos
		marca:'Volkswagen',
		referncia:'Beatle',
		modelo: 2017,
		imagen: '../imgs/beatle.jpg',
		cilindrajre:2000,
		//metodos

		info:function(){
			emarca.innerHTML = this.marca;
			ereferencia.innerHTML = this.referncia;
			emodelo.innerHTML = this.modelo;
			eimagen.innerHTML = '<img src=+"this.imagen">';
			ecilindraje.innerHTML = this.cilindrajre;

		},
		arrancar:function(){

		},
		apagar:function(){

		},
		adelantar:function(){

		},
		frenar:function(){

		},
		girar_d:function(){

		},
		girar_i:function(){

		},
		retroceder:function(){

		}



	}