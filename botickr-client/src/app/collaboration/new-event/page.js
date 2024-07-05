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
            <div className='w-100 d-flex justify-content-center'>
                <TicketForm />
            </div>

        </>
    )

}
