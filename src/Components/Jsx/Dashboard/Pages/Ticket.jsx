import React, { Component } from 'react'

export class Ticket extends Component {
    constructor(){
        super();
        this.state={
            txnId:""
        }

    
    }


    render() {

        this.state.txnId = this.props.history.location.state;

        return (
            <div>
                
            </div>
        )
    }
}

export default Ticket
