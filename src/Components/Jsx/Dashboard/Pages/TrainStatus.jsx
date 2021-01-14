import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import "../../../Css/TrainStatus.css"

class TrainStatus extends Component {
    
    constructor(){
        super()
        this.state={
            
            trainNo : "",
            trainName : "",
            src : "",
            dest : "",
            show : false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.state = {
          show: false
        };
      }

    showTable = () => {
        this.setState({
          show: true
        });

        console.log('Button Clicked')
      };

    

    

    handleChange(event){
        this.setState({
            [ event.target.name ] : event.target.value
          })
      }

      async handleSubmit(event){
        event.preventDefault();
           
        this.props.history.push('/Dashboard/Receipt');  
     }
    
    
    
    
    render() {
        return (

            <div className="trainstatus">

                <div className="trainstat">

                    <h3 style={{marginTop:"10px",marginBottom:"10px"}}>Train Status</h3>

                    <div  className = "status-textbox">

                    <FontAwesomeIcon icon = {faTrain} />
                    <input className= "TrNo" name="trainNo" type="text" value={this.state.trainNo} onChange={this.handleChange} placeholder="Enter Train Number" required>

                    </input>

                    

                    </div>

                    <button className = "status-button" onClick={this.showTable}>Check Status</button>
                        

                    <div className = "status-table">
                         
                    {
                        this.state.show &&
                        <table className="table  table-bordered ">
                            <thead className="thead-dark" >
                                 <tr>
                                    <th>Train No</th>
                                    <th>Train Name</th>
                                    <th>Source</th>
                                    <th>Destination</th>               
                                </tr>
                            </thead>
                             <tbody>
                                <tr>
                                    <td>Col1</td>
                                    <td>Col2</td>
                                    <td>Col3</td>
                                    <td>Col4</td>
                                </tr>

                            </tbody>
                         </table>
                    }

                    </div>

                </div>

            </div>


            
        )
    }
}

export default TrainStatus