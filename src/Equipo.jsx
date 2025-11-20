import { useContext } from 'react'
import { PokemonInTeam } from './pokemonInTeam'
import { teamContext } from './context/teamContext.jsx'



export function Equipo () {
    const {arrayPokemon}= useContext(teamContext)
    return(
        <div style={{ columnCount: 2 }}>
            <PokemonInTeam imgPokemon={arrayPokemon[0].imgPokemon} name={arrayPokemon[0].namePokemon}/>
            <PokemonInTeam imgPokemon={arrayPokemon[1].imgPokemon} name={arrayPokemon[1].namePokemon}/>
            <PokemonInTeam imgPokemon={arrayPokemon[2].imgPokemon} name={arrayPokemon[2].namePokemon}/>
        <div class="separador"></div>
            <PokemonInTeam imgPokemon={arrayPokemon[3].imgPokemon} name={arrayPokemon[3].namePokemon}/>
            <PokemonInTeam imgPokemon={arrayPokemon[4].imgPokemon} name={arrayPokemon[4].namePokemon}/>
            <PokemonInTeam imgPokemon={arrayPokemon[5].imgPokemon} name={arrayPokemon[5].namePokemon}/>
    </div>        
    )
}