import React, { Component } from 'react'

class BookingHistory extends Component{

    constructor(){
        super()

        this.state ={
            tickets :[{}]
        }
        

    }


    componentDidMount(){



    }




    render(){


        return(

                    <div id="booking-history" className="booking-history" style={{paddingTop:"80px", margin: "0 60px"}}>

                        <p style={{marginBottom:"0px", fontSize:"40px"}}>Booking History</p>
                        
                        {
                             this.state.tickets.map((item,index) => (

                            <div key={index} className="history-table">
                            <p style={{marginBottom:"0px", marginLeft:"-40px", fontSize:"20px"}}> {index + 1}. </p>    
                            <div className="ticket" style={{paddingTop:"0px"}}>
                            <table className="table table-bordered table-xs-responsive table-hover">
                                <tr>
                                    <td>PNR : ABGHYO</td>   
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