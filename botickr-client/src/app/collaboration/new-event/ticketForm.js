"use client"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useRef, useEffect } from 'react';
import { FormGroup } from 'react-bootstrap';
import styles from '../../styles/collaboration/new-event/ticketForm.module.css'
import Pagination from 'react-bootstrap/Pagination';

export default function TicketForm() {
    const [ticketsDto, setTicketDto] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const addTicketDto = () => {
        const newTicket = { quantity: '', type: 'Normal', price: '' };
        setTicketDto(prevTickets => [...prevTickets, newTicket]);
        setSelectedIndex(ticketsDto.length);
    }

    const removeTicketDto = (index) => {
        setTicketDto(prevTickets => {
            const newTickets = prevTickets.filter((_, i) => i !== index);

            if (newTickets.length === 0) {
                setSelectedIndex(null);
            } else if (index >= newTickets.length) {
                setSelectedIndex(newTickets.length - 1);
            } else {
                setSelectedIndex(index);
            }

            return newTickets;
        });
    };

    const handlePageClick = (index) => {
        setSelectedIndex(index);
    }

    const renderPagination = () => {
        let items = [];
        const totalPages = ticketsDto.length;
        const maxVisiblePages = 3;

        if (totalPages > 0) {
            items.push(
                <Pagination.First key="first" onClick={() => handlePageClick(0)} disabled={selectedIndex === 0} />,
                <Pagination.Prev key="prev" onClick={() => handlePageClick(Math.max(0, selectedIndex - 1))} disabled={selectedIndex === 0} />
            );

            let startPage = Math.max(0, selectedIndex - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

            startPage = Math.max(0, endPage - maxVisiblePages + 1);

            if (startPage > 0) {
                items.push(<Pagination.Ellipsis key="ellipsis-start" />);
            }

            for (let number = startPage; number <= endPage; number++) {
                items.push(
                    <Pagination.Item 
                        key={number} 
                        active={number === selectedIndex}
                        onClick={() => handlePageClick(number)}
                    >
                        {number + 1}
                    </Pagination.Item>
                );
            }

            if (endPage < totalPages - 1) {
                items.push(<Pagination.Ellipsis key="ellipsis-end" />);
            }

            items.push(
                <Pagination.Next key="next" onClick={() => handlePageClick(Math.min(totalPages - 1, selectedIndex + 1))} disabled={selectedIndex === totalPages - 1} />,
                <Pagination.Last key="last" onClick={() => handlePageClick(totalPages - 1)} disabled={selectedIndex === totalPages - 1} />
            );
        }

        return <Pagination>{items}</Pagination>;
    }

    return (
        <>
            <div className='d-flex flex-column justify-content-start'>
                <div className='col-2'>
                    <div className='d-flex flex-row flex-wrap justify-content-start'>

                    {renderPagination()}

                    </div>
                    {selectedIndex !== null && (
                        <div className={styles['ticket-container']}>
                            <div className='d-flex flex-column align-items-center'>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Ticket type</Form.Label>
                                        <Form.Select
                                            className="text-muted"
                                            value={ticketsDto[selectedIndex].type}
                                            onChange={(e) => {
                                                const updatedTickets = [...ticketsDto];
                                                updatedTickets[selectedIndex].type = e.target.value;
                                                setTicketDto(updatedTickets);
                                            }} >
                                            <option>Normal</option>
                                            <option>Discounted</option>
                                            <option>Family</option>
                                            <option>Vip</option>
                                            <option>Special</option>
                                        </Form.Select>
                                    </FormGroup>
                                    <Form.Group className="mt-1 mb-2" controlId="formBasicEmail">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control
                                            required
                                            type="numeric"
                                            placeholder="Enter quantity of tickets"
                                            value={ticketsDto[selectedIndex].quantity}
                                            onChange={(e) => {
                                                const updatedTickets = [...ticketsDto];
                                                updatedTickets[selectedIndex].quantity = e.target.value;
                                                setTicketDto(updatedTickets);
                                            }} />
                                    </Form.Group>
                                    <Form.Group className="mt-1 mb-2" controlId="formBasicEmail">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Enter price of each ticket"
                                            value={ticketsDto[selectedIndex].price}
                                            onChange={(e) => {
                                                const updatedTickets = [...ticketsDto];
                                                updatedTickets[selectedIndex].price = e.target.value;
                                                setTicketDto(updatedTickets);
                                            }} />
                                    </Form.Group>
                                </Form>
                                <button onClick={() => removeTicketDto(selectedIndex)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <button onClick={addTicketDto}>Add new tickets</button>
                </div>
            </div>
        </>
    );
}
