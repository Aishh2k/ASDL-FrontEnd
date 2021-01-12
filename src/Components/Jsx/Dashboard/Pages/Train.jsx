import React, { Component } from 'react'
import '../../../Css/Train.css'


class Train extends Component {
    constructor(props){
        super(props)
        this.state={
            Train1 : [],
            avail : [],
            res : [],

        }
        this.changeRoute=this.changeRoute.bind(this)
    }

   


    changeRoute(){
        let path = `/Dashboard/Passenger`;
        this.props.history.push(path)
    }
    render() {
        this.state.Train1 = this.props.history.location.state;
        

        var obj = this.state.Train1.avail_train
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            this.state.avail.push(val)
          }
        }


        var obj = this.state.Train1.reserved_train
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            this.state.res.push(val)
          }
        }

     

       

        return (
            <div id="content" >
                <div id="train-deets">
                <h4> Available Trains: </h4>

                    <table className="table table-bordered table-xs-responsive table-hover">
                        <thead className="thead-dark">  
                        <tr>
                            <th>Train No</th>
                            <th>Train Name</th>
                            <th>Time of Dep.</th>
                            <th>Time of Arrival</th>
                            <th>Minimum Price</th>
                            <th>Available Seats </th>
                            <th> Booking</th>


                        </tr>
                        </thead>
                        <tbody>
                        {
                             this.state.avail.map((item) => (
                                <tr>
                                     <td>{item.train_id}</td>
                                    <td>{item.train_name}</td>
                                    <td>{item.departure}</td>
                                    <td>{item.arrival}</td>
                                    <td> ₹ {item.price}</td>
                                    <td>{item.available_seats}</td> 
                                    <td><button onClick={this.changeRoute} className="btn btn-primary pull-right">Book</button></td>


                                </tr>
                            ))
                        }
                            
                        </tbody>
                    </table>
                </div>

                <div id="train-deets">
                <h4> Reserved Trains: </h4>

                    <table className="table table-bordered table-xs-responsive table-hover">
                        <thead className="thead-dark">  
                        <tr>
                            <th>Train No</th>
                            <th>Train Name</th>
                            <th>Time of Dep.</th>
                            <th>Time of Arrival</th>
                            <th>Price</th>
                            <th>Waiting List </th>
                            <th> Booking</th>


                        </tr>
                        </thead>
                        <tbody>
                        {
                             this.state.res.map((item) => (
                                <tr>
                                <td>{item.train_id}</td>
                               <td>{item.train_name}</td>
                               <td>{item.departure}</td>
                               <td>{item.arrival}</td>
                               <td> ₹ {item.price}</td>
                               <td>WL - {item.reservation_queue}</td>
                               <td><button onClick={this.changeRoute} className="btn btn-primary pull-right">Book</button></td>


                           </tr>
                            ))
                        }
                            
                        </tbody>
                    </table>
                </div>
                </div>
        )
    }
}

    

export default Train
