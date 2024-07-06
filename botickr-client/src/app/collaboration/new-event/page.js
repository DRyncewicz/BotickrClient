"use client"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useRef, useEffect } from 'react';
import { FormGroup } from 'react-bootstrap';
import TicketForm from './ticketForm'
export default function Home() {

    return (
        <>
            <div className='col-12 d-flex flex-row'>
            <div className='col-6'>


                </div>
                <div className='col-6 d-flex justify-content-end p-3'>
                <TicketForm />

                </div>
            </div>

        </>
    )

}
