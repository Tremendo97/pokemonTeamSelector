import { createContext,useState } from "react";

export const teamContext = createContext()

export function TeamProvider({ children }) {
  const [arrayPokemon, setArrayPokemon] = useState([
    { imgPokemon: "recursos/pokemon_vacio.png", namePokemon: "None" },
    { imgPokemon: "recursos/pokemon_vacio.png", namePokemon: "None" },
    { imgPokemon: "recursos/pokemon_vacio.png", namePokemon: "None" },
    { imgPokemon: "recursos/pokemon_vacio.png", namePokemon: "None" },
    { imgPokemon: "recursos/pokemon_vacio.png", namePokemon: "None" },
    { imgPokemon: "recursos/pokemon_vacio.png", namePokemon: "None" }
  ])

  const setPokemonInTeam = (newImg, newName, add) => {
    setArrayPokemon(prev =>{
      const newArray = [...prev]
      if(add){
      for(const i of newArray){
        if(i.namePokemon==="None"){
          i.namePokemon=newName
          i.imgPokemon=newImg
          break
        }
      }
      }
      else{
      for(const i of newArray){
        if(i.namePokemon===newName){
          i.namePokemon="None"
          i.imgPokemon="recursos/pokemon_vacio.png"
          break
        }
      } 
      }
      return newArray
      }
    )
    }

  return (
    <teamContext.Provider value={{ arrayPokemon, setPokemonInTeam }}>
      {children}
    </teamContext.Provider>
  );
}