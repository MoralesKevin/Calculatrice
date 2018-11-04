import React, { Component } from 'react';
import math from 'mathjs';
import Chiffres from '../reducers/Chiffres';
import Operateurs from '../reducers/Operateurs';
import "./Calculatrice.css";

class Calculette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ecran: "",
            resultat: "",
            operators: Operateurs,
            numbers: Chiffres,
        }
        this.handleClick = this.handleClick.bind(this);
        this.clear = this.clear.bind(this);
        this.operation = this.operation.bind(this);
        this.return = this.return.bind(this);
    }

    handleClick(event) {
        this.setState({
            ecran: this.state.ecran + event.target.value
        })
    }

    operation() {
        if (this.state.ecran.includes(".")) {
            this.setState({ resultat: math.eval(this.state.ecran).toFixed(4) })
        } else {
            this.setState({ resultat: math.eval(this.state.ecran) })
        }
    }

    clear() {
        this.setState({
            ecran: "",
            resultat: "",
        })
    }

    return() {
        this.setState({ ecran: this.state.ecran.slice(0, this.state.ecran.length - 1) })
    }

    render() {
        return (
            <div className="calculette">
                <p className="ecran">
                    <span className="calcul">{this.state.ecran}</span>
                    <span className="resultat">{this.state.resultat}</span>
                </p>
                <div className="pct-clr-btn">
                    <button className="null" onClick={this.clear}> </button>
                    <button className="clear" onClick={this.clear}>C</button>
                    <button className="retour" onClick={this.return}>return</button>
                </div>
                <div className="boutons">
                    {this.state.numbers.map(number => <button className="touche" onClick={this.handleClick} key={number.id} value={number.valeur}>{number.valeur}</button>)}
                </div>
                <div>
                    <button className="btnpoint">.</button>
                </div>
                <div className="operateur">
                    {this.state.operators.map(operator => <button className="touche" onClick={this.handleClick} key={operator.id} value={operator.valeur}>{operator.valeur}</button>)}
                </div>
                <div className="egal">
                    <button className="btn-egal" value="=" onClick={this.operation}>=</button>
                </div>
            </div>
        );
    }
}

export default Calculette;