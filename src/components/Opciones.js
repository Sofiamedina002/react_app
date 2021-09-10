import React from 'react';

class Opciones extends React.Component {
    
    render(){
        return (
            <div className="opciones">
                <div className="opcion"> 
                    <button id="A" className="botones" onClick={this.props.handle.handleA}> a </button>
                    <p>{this.props.opciones.a}</p>
                </div>
                <div className='opcion'>
                    <button id="B" className="botones" onClick={this.props.handle.handleB}> b </button>
                    <p>{this.props.opciones.b}</p>
                </div>
            </div>
        );
    }
}

export default Opciones