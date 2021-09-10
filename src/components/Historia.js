import React from 'react';
import Opciones from "./Opciones"
import Recordatorio from "./Recordatorio"
import data from "../components/data.json"

class Historia extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 1,
            id: "1",
            historial: []
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        const {contador, id, historial} = this.state;
        if (prevState.contador !== contador && contador <= 5){
            historial.push(id.substring(1))
        }

    }

    handleClickA = () => {
        if (this.state.contador < 5) {
            this.setState(
                { 
                    contador: this.state.contador + 1,
                    id: this.state.contador + 1 + "a"
                }
            )
        } else {
            alert("Fin")
        }
    }

    handleClickB = () => {
        if (this.state.contador < 5) {
            this.setState(
                { 
                    contador: this.state.contador + 1,
                    id: this.state.contador + 1 + "b"
                }
            )
        } else {
            alert("Fin")
    }
    }



    render(){

        const {id} = this.state;
        const datos = data.find((dat) => dat.id.includes(id));
        const opciones = {
            handleA: this.handleClickA,
            handleB: this.handleClickB
        }
        return (
            <div className="layout">
                <h1 className="historia">{datos.historia}</h1>
                <Opciones handle={opciones} opciones={datos.opciones}/>
                <Recordatorio opcionesAnteriores={id.substring(1)} historial={this.state.historial}/>
            </div>
           
        )
    }
}

export default Historia