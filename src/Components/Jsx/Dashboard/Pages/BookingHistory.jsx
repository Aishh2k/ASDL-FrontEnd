import React, { Component } from 'react'

class BookingHistory extends Component{

    constructor(){
        super()

        this.state ={
            tickets :[[]]
        }
        

    }

    render(){

        return(

            

                    <div id="booking-history" className="booking-history" style={{paddingTop:"80px"}}>

                        <h2>Booking History</h2>
                        <div className="history-table">

                           

                            <div className="ticket" style={{paddingTop:"150px"}}>
                                
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

                                <h5> Passengers</h5>

                                <table className="table table-bordered table-xs-responsive table-hover">
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


                            </table>
                            </div>


                        </div>
                    </div>



             
        )
    }
}

export default BookingHistory