"use client";

import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventComponent.module.css';
import SearchEventListComponent from './SearchEventListComponent';
import eventDtos from '@/app/temp/EventDtoDataSeed';
const SearchEventComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const eventDto = eventDtos.slice(0, 4);


    return (
        <section className='search mx-5'>
            <div className='container align-items-center'>
                <div className='d-col justify-content-center align-items-center'>
                    <div className={styles.formContainer}>
                        <form className='d-flex justify-content-center'>
                            <div className='col-2'>
                                <input
                                    className='btn btn-light form-select-lg w-100 h-100 rounded-0 border border-dark'
                                    onClick={handleFocus}
                                    placeholder='Events, Arists'
                                />
                            </div>
                            <div className='col-2'>
                                <input
                                    className='btn btn-light form-select-lg w-100 h-100 rounded-0 border border-dark'
                                    placeholder='Date'>
                                        
                                </input>
                            </div>
                            <div className='col-2'>
                                <input
                                    className='btn btn-light form-select-lg w-100 h-100 rounded-0 border border-dark'
                                    placeholder='Localization'>
                                </input>
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-dark btn-lg justify-content-center w-100 rounded-0'>
                                    <i className="bi bi-search-heart-fill"></i>
                                    SEARCH
                                </button>
                            </div>
                        </form>
                        {isExpanded && (
                            <div className={`${styles.eventselect}`} ref={containerRef}>
                                <div className='w-100'>
                                    {eventDto.map((element, index) => (
                                        <SearchEventListComponent key={index} eventDto={element} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchEventComponent;