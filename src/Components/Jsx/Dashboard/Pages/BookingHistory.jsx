import React, { Component } from 'react'

class BookingHistory extends Component{

    constructor(){
        super()

        this.state ={
            trans :[],
            details:[{}],
            len : 0
        }
        

    }


    componentDidMount(){
        var token= {
            "token" : localStorage.getItem("token")
        }

        // console.log(localStorage.getItem("token"))
        

      fetch("http://127.0.0.1:8000/user/user_bookings_history/",{
        method: 'POST',
        headers : {'Content-type': 'application/json'},
        body: JSON.stringify(token)
    })  
    .then(response => 
        response.json()  
      )
    .then( data =>{
        this.setState({
            details: data
        })
        //console.log(this.state.details)
        
    })
     
    }

    
    render(){

        // console.log("debugg:"+ this.state.details.bookings)
        var obj = this.state.details.bookings
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {           
                // console.log(key, obj[key]);
                var val = obj[key];
                
                var temp = []

                for (var k in val){
                    if(val.hasOwnProperty(k)){
                        temp.push(val[k])
                    }
                }

                this.state.trans.push(temp)

                // val.map((item,index) =>(
                //     console.log(item)

                // ))
            }
        }
        //console.log(this.state.trans)

       
        
        return(

                    <div id="booking-history" className="booking-history" style={{paddingTop:"80px", margin: "0 60px"}}>

                        <p style={{marginBottom:"0px", fontSize:"40px"}}>Booking History</p>
                        
                        {
                            
                             this.state.trans.map((item,index) => (

                            <div key={index} className="history-table">
                            <p style={{marginBottom:"0px", marginLeft:"-40px", fontSize:"20px"}}> {index + 1}. </p>    
                            <div className="ticket" style={{paddingTop:"0px"}}>
                            <table className="table table-bordered table-xs-responsive">
                            <tbody>
                                <tr>
                                    {/* {console.log(item)}
                                    {console.log(index)} */}
                                      
                                    <td>Transcation ID : {item[0].data.transaction_id}</td>
                                    <td>Train Name : {item[0].data.train.train_name}</td>
                                </tr>
                                {/* <tr>
                                    <td>Train Number : {} </td>   
                                    <td>Train Name : {item[0].data.train.train_name}</td>
                                </tr> */}
                                <tr>
                                    <td>From : {item[0].data.boarding} </td>
                                    <td>To : {item[0].data.destination}</td>
                                </tr>
                                <tr>
                                    <td>Departure : {item[0].data.train.departure_time} </td>   
                                    <td>Arrival : {item[0].data.train.arrival_time}</td>
                                </tr>
                            </tbody>
                                
                            </table>

                            </div>

                            <table className="table table-bordered table-xs-responsive">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Ticket ID</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Sex</th>
                                                <th>Seat No</th>
                                                <th>Berth</th>
                                            </tr>
                                        </thead>



                                        <tbody>

                                            
                                            {    item.map((a,i) => (
                                               
                                                 
                                                <tr key={i}>

                                                    

                                                    
                                                    <td>{a.data.ticket_number}</td>
                                                    <td>{a.data.passenger.name}</td>
                                                    <td>{a.data.passenger.age}</td>
                                                    <td>{a.data.passenger.gender}</td>
                                                    <td>{a.data.seat_no}</td>
                                                    <td>{a.data.passenger.berth}</td>
                                                </tr>

                                                    
                                            ))    
                                            }
                                        </tbody>
                            </table>


                        <hr  style={{
                            margin: "40px -30px",
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .4,
                            opacity: 0.3,
                            borderColor : '#000000'
                        }}/>

                        </div>

                        
                        


                        )) }
                        

                    </div>



             
        )
    }
}

export default BookingHistory