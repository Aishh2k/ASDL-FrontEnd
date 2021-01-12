import React, { Component } from 'react'
import '../../../Css/Passenger.css'

class Passenger extends Component {
    constructor(props){
        super(props)
        this.state={
         
        pax : [{
                name:"",
                age: 0,
                sex : "",
                berth : ""
            }]   

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
        this.sexChange = this.sexChange.bind(this);
        this.berthChange = this.berthChange.bind(this);
    }

    nameChange(event,index){
        this.state.pax[index].name = event.target.value
        this.setState({
            pax : this.state.pax
        })
        
    }

    berthChange(event,index){
        this.state.pax[index].berth = event.target.value
        this.setState({
            pax : this.state.pax
        })
        
    }

    ageChange(event,index){
        this.state.pax[index].age = event.target.value
        this.setState({
            pax : this.state.pax
        })

    }
       

    sexChange(event,index){
        this.state.pax[index].sex = event.target.value
        this.setState({
            pax : this.state.pax
        })
        
    }

    addPax = e => {
        e.preventDefault()
        
        this.setState({pax : [...this.state.pax,{}]})
    }

   

    async handleSubmit(event){
        event.preventDefault();

        console.log(this.state.pax)

        let path = `/Dashboard/Payment`;
        this.props.history.push(path)
          
     }
    


    render() {
        return (
            <div id="content" style={{marginTop:"90px"}} >
                <div id="train-deets">
                <h4 style={{float:"left"}}> Passenger Details: </h4>
                <button  onClick={(e) => this.addPax(e)} className="btn  mb-4 btn-primary pull-right" style={{float:"right",width:"200px"}}>Add Pax</button>
                </div>
                    <table className="table table-bordered table-xs-responsive">
                        <thead className="thead-dark">  
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Berth Preference</th>


                        </tr>
                        </thead>
                        <tbody>
                        {
                             this.state.pax.map((person,index) => (
                                <tr key={index}>
                                    
                                    <td><input className = "Name" name="name" type="text" value={person.name} onChange={e => {this.nameChange(e,index)}} placeholder="Name" required/></td>
                                    
                                    <td><input className ="Age" name="age" placeholder="Age" type="number" min="0" max="100" value={person.age} onChange={e => {this.ageChange(e,index)}}  required/></td>
                                    
                                    <td>
                                    <select className="Sex" name="sex" onChange={e => {this.sexChange(e,index)}} value={person.sex}>
                                    <option value=" ">Sex</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="T">Transgender</option>
                                    </select>
                                    </td>
                                    
                                    <td>
                                    <select className="Berth" name="berth" onChange={e => {this.berthChange(e,index)}} value={person.berth}>
                                    <option value=" ">Berth</option>
                                    <option value="LB">Lower Berth</option>
                                    <option value="MB">Middle Berth</option>
                                    <option value="UB">Upper Berth</option>
                                    <option value="SL">Side Lower</option>
                                    <option value="SU">Side Upper</option>
                                    </select>
                                    </td>
                                    


                                </tr>
                            ))
                        }
                            
                        </tbody>
                    </table>
                    
                    <div className="text-center">

                <input style={{margin:"0 auto" ,width:"350px"}} className="pax-submit" className="btn mt-4 btn-primary" type="submit" onClick={this.handleSubmit} value="Pay"/><br/>

                </div>
                </div>
                
        )
    }
}

    

export default Passenger

