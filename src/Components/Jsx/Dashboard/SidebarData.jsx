import React from 'react'
import { faBars, faHome, faList, faListAlt, faMoneyCheckAlt, faShoppingBasket, faTicketAlt, faTruckMoving, faUserCircle } from '@fortawesome/free-solid-svg-icons'


export const SidebarData =[
    {
        title:'Home',
        path:'/Dashboard',
        cName:'sidebar-item',
        icon: faHome

    },
    {
        title:'Booking',
        path:'/Dashboard/Booking',
        cName:'sidebar-item',
        icon: faTicketAlt

    },
    {
        title:'Booked Tickets',
        path:'/Dashboard/BookingHistory',
        cName:'sidebar-item',
        icon: faList


    },
    {
        title:'Train Status',
        path:'/Dashboard/TrainStatus',
        cName:'sidebar-item',
        icon: faListAlt


    },
    {
        title:'Account',
        path:'/Dashboard/Account',
        cName:'sidebar-item',
        icon: faUserCircle


    }


]