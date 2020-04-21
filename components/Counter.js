import React, {Component} from 'react'

export class Countre extends Component {
    render() {
        return(
            <div>
                <div>
                Counter : <span>{this.props.contador}</span>
                </div>
                <button onClick={this.props.increment} >+</button>
                <button onClick={this.props.decrement} >-</button>
            </div>
        )
    }
}