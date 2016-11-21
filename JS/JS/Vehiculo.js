
	
	var emarca=document.getElementById('emarca');
	var ereferencia=document.getElementById('ereferencia');
	var emodelo=document.getElementById('emodelo');
	var eimagen=document.getElementById('eimagen');
	var ecilindraje=document.getElementById('ecilindraje');

	var iniciar=document.getElementById('ini');
	var pausar=document.getElementById('pau');
	var detener=document.getElementById('det');
	var avanzar=document.getElementById('ava');
	var izquierda=document.getElementById('izq');
	var derecha=document.getElementById('der');
	
	var vhcl=document.getElementById('vhcl')

	var Vehiculo = {
		//atributos
		marca:'Volkswagen',
		referncia:'Beatle',
		modelo: 2017,
		imagen: 'imgs/vw.png',
		cilindrajre:2000,
		//metodos

		info:function(){
			emarca.innerHTML = '<span>Marca</span>'+this.marca;
			ereferencia.innerHTML = '<span>Referencia</span>'+this.referncia;
			emodelo.innerHTML = '<span>Modelo</span>'+this.modelo;
			eimagen.innerHTML = '<span>Imagen</span>'+'<img src='+this.imagen+'>';
			ecilindraje.innerHTML = '<span>Cilindraje</span>'+this.cilindrajre;

		},
		
		controles:function(){
			iniciar.onclick=function(){
					vhcl.classList.add('arrancar');
			}
			pausar.onclick=function(){
					vhcl.classList.remove('arrancar');
					vhcl.classList.remove('retroceso');
					vhcl.classList.remove('izquierda');
					vhcl.classList.remove('avanzar');
					vhcl.classList.remove('derecha');
			}
			detener.onclick=function(){
					vhcl.classList.add('retroceso');

			}
			avanzar.onclick=function(){
					vhcl.classList.toggle('avanzar');
			}
			izquierda.onclick=function(){
					vhcl.classList.toggle('izquierda');		
			}
			derecha.onclick=function(){
					vhcl.classList.toggle('derecha');
			}
		}



	}