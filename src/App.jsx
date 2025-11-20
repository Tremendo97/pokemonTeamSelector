import'./App.css'


import { InventaryItem } from './InventaryItem'

export function App () {
    return (
        <article class="contenedor-pokemon">
            <div>
                <InventaryItem  habilidad="Intimidación" name="Empoleon" imgItem="recursos/empoleon.png"/>
                <InventaryItem  habilidad="Intimidación" name="Charizard" imgItem="recursos/charizard.png"/>
                <InventaryItem  habilidad="Intimidación" name="Braviary hisui" imgItem="recursos/braviary-hisui.png"/>
                <InventaryItem  habilidad="Intimidación" name="Carvanha" imgItem="recursos/carvanha.png"/>
                <InventaryItem  habilidad="Intimidación" name="Cloyster" imgItem="recursos/cloyster.png"/>
                <InventaryItem  habilidad="Intimidación" name="Deoxys" imgItem="recursos/deoxys.png"/>
                <InventaryItem  habilidad="Intimidación" name="Diggersby" imgItem="recursos/diggersby.png"/>
                <InventaryItem  habilidad="Intimidación" name="Emolga" imgItem="recursos/emolga.png"/>
                <InventaryItem  habilidad="Intimidación" name="Garchomp" imgItem="recursos/garchomp-f.png"/>
            </div>
        </article>
    )
}