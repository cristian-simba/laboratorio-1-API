//CONSULTAR API
const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
        pintarPokemon(data, number);
        })
    .catch(error => {
        console.log(error);
    });
};

//GENERAR LOS POKEMONS DE FORMA RANDOM
const btnSeleccionar = () => 
{
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2);
};

//INVOCAR FUNCION 
btnSeleccionar()

//OBTENER LA REFERENCIA DEL DIV DONDE SE VA A PINTAR LOS POKEMONS
const lista = document.getElementById("listarpokemon")

//VER EL POKEMON
const pintarPokemon = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    console.log(item.getElementsByTagName("p"));
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}