export function PokemonInTeam ({imgPokemon, name}) {
    return(
        <article class="pokemonInTeam">
            <img class="imagenPokemonInTeam" alt="imagen de pokemo" src={imgPokemon}/>
            <p class="pokemonName">{name}</p>
        </article>
    )
}