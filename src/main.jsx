
import { createRoot } from 'react-dom/client'
import { TeamProvider } from './context/teamContext.jsx'
import {App} from './App.jsx'
import {Equipo} from './Equipo.jsx'
import'./index.css'
import './equipo.css'


const root=createRoot(document.getElementById('root'))

root.render(
  <TeamProvider>
    <div class="contendorAppEquipo">
      <div class="seleccionDePokemon" id="seleccionDePokemon">
        <App />
      </div>
      <div class="centrarContenido">
      <div class="equipo" id="equipo">
        <Equipo />
      </div>
      </div>
    </div>
  </TeamProvider>
)