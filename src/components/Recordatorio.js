import React from 'react';

class Recordatorio extends React.Component {
    render(){
        return (
            <div className="recordatorio">
                <p>Selección anterior: {this.props.opcionesAnteriores}</p>
                <p>Historial de opciones elegidas: </p>
                <ul>{
                    this.props.historial.map((elemento, index)=> {
                        return <li key={index}> {elemento}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Recordatorio