import React, { Component } from 'react'

class BookingHistory extends Component{

    constructor(){
        super()

        this.state ={
            trans :[],
            details:[{}]
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
        console.log(this.state.details)
        
    })
     
    }


    render(){

        // console.log("debugg:"+ this.state.details.bookings)
        var obj = this.state.details.bookings
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {           
                // console.log(key, obj[key]);
                var val = obj[key];
                this.state.trans.push({ key:val})

                // val.map((item,index) =>(
                //     console.log(item)

                // ))
            }
        }
        // console.log(this.state.trans)
        
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
                                    <td>PNR : 2234</td>   
                                    <td>Transcation ID : 12ER56HJ90LMX</td>
                                </tr>
                                <tr>
                                    <td>Train Number : 12565 </td>   
                                    <td>Train Name : Konasa Express</td>
                                </tr>
                                <tr>
                                    <td>From : EKM </td>
                                    <td>To : BLR</td>
                                </tr>
                                <tr>
                                    <td>Departure : 12:00 AM </td>   
                                    <td>Arrival : 12:00 PM</td>
                                </tr>
                            </tbody>
                                
                            </table>

                            </div>

                            <table className="table table-bordered table-xs-responsive">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Sex</th>
                                                <th>Seat No</th>
                                                <th>Berth</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                <tr>
                                                    <td>Ann Mary</td>
                                                    <td>12</td>
                                                    <td>F</td>
                                                    <td>47</td>
                                                    <td>SL</td>
                                                </tr>

                                            
                                                
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