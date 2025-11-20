import{useState, useContext}from 'react'
import { teamContext } from './context/teamContext.jsx'

export function InventaryItem ({habilidad, name, imgItem}) {
  const {arrayPokemon,setPokemonInTeam}= useContext(teamContext)

  const [inTeam, setInTeam] = useState(false)
  
  const seleceted = inTeam ? 'In Team' : 'Add'
  const buttonClass = inTeam ? 'select-button-inTeam' : 'select-button'

  const handleClick = () =>{
    setInTeam(!inTeam)
    if(!inTeam){
      setPokemonInTeam(imgItem, name, true)
    }
    else{
      setPokemonInTeam(imgItem, name, false)
    }
    
  }

  return (
    <article className='each-pokemon'>
      <header className='header-each-pokemon'>
        <img className='imgen-pokemon'alt="imgen del pokemon" src={imgItem}/>
        <div className='pokemon-info'>
          <strong>{name}</strong>
          <span className='InvenatryItem-habilidad'>{habilidad}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClass} onClick={handleClick}>
          <span className='texto-boton'>{seleceted}</span>
          <span className='eliminar-equipo'>Remove Team</span>
        </button>
      </aside>
    </article>
  )
}

