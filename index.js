
let peli1 = 'The Wolf Of Wall Street'
let peli2 = 'Pulp Fiction'
let peli3 = 'Goodfellas'

let capacidad = 10


alert('Bienvenido a AvioseCines, Estos son nuestros estrenos!!');

let pelicula = prompt(`A) ${peli1}  B) ${peli2}  C) ${peli3}`).toLowerCase();


function bucle(){

while (pelicula != 'a' && pelicula != 'b' && pelicula != 'c') {
    pelicula = prompt(`Ingrese una opcion válida`).toLowerCase(); 
}
if (pelicula == 'a') {
    alert(`Has escogido ${peli1}`);
} else if (pelicula == 'b') {
    alert(`Has escogido ${peli2}`);
} else if (pelicula == 'c') {
    alert(`Has escogido ${peli3}`);
}
}

bucle()


let boletos = prompt('¿Cuántas entradas queres?')

alert('tenes ' + boletos + ' entradas para su funcion, Disfrutalo!!!')

function Datos(){
    console.log('Usted se encuentra en AvioseCines, capacidad maxima para 20 personas. Disfrute su pelicula.')
}

Datos()


const Titulo = ['Cuales de las siguientes peliculas te gustaria ver:']

const Peliculas = ['EL Padrino','Scarface','Taxi Driver','Avangers: Infinity War','Batman: The Dark Knight']

const Peliculas2 =[
    {id: 1,name: 'El Padrino'},
    {id: 2,name: 'Scarface'},
    {id: 3,name: 'Taxi Driver'},
    {id: 4,name: 'Avangers: Infinity War'},
    {id: 5,name: 'Batman: The Dark Knight'},
]

const Aviso = Titulo.concat(Peliculas)


const favorito = alert(Aviso.join('\n'))

const resultado = Peliculas2.find(P => P.id == '1' )
console.log(resultado)
console.log('Con el ID de arriba, podes verla antes')


