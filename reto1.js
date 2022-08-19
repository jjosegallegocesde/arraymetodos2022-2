let peliculas=[
    {nombre:"Harry Potter",genero:"ciencia ficcion",costo:2000},
    {nombre:"Dragon Ball Super",genero:"anime",costo:3000},
    {nombre:"Wakanda Forever", genero:"ciencia ficcion", costo:5000},
    {nombre:"Django sin cadenas", genero:"ciencia ficcion", costo:1500},
    {nombre:"El viaje del chigui", genero:"anime", costo:60}
]

let filtro=peliculas.filter(pelicula=>pelicula.genero=="ciencia ficcion")
console.log(filtro)

let filtro2=peliculas.filter(pelicula=>pelicula.costo >= 2000)
console.log(filtro2)

//peliculas de anime y buscar si alguna de ellas cuesta 3000
let filtro3 = peliculas.filter(function(pelicula){
    return (pelicula.genero==("anime"), pelicula.costo == 3000)
})
console.log(filtro3)

let filtro4 = peliculas.filter(pelicula=>pelicula.genero=="anime");
let busquedaJ = filtro4.find(busco=>busco.costo==3000)
console.log(busquedaJ);

let mapa = peliculas.map(function(pelicula){
    return (pelicula.nombre = "Dago")
})

console.log(peliculas)