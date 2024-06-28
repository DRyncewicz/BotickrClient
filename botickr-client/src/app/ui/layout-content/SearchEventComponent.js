"use client";

import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventComponent.module.css';
import SearchEventListComponent from './SearchEventListComponent';
import SearchEventLocalizationComponent from './SearchEventLocalizationComponent'
const SearchEventComponent = () => {
    const [isExpandedEvents, setIsExpandedEvents] = useState(false);
    const [isExpandedLocation, setIsExpandedLocation] = useState(false);

    const containerRefEvents = useRef(null);
    const containerRefLocation = useRef(null);

    const handleFocus = () => {
        setIsExpandedEvents(true);
    };

    const handleFocusLocalization = () => {
        setIsExpandedLocation(true);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRefEvents.current && !containerRefEvents.current.contains(event.target)) {
                setIsExpandedEvents(false);
            }
            if (containerRefLocation.current && !containerRefLocation.current.contains(event.target)) {
                setIsExpandedLocation(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const [eventInput, setEventInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [locationInput, setLocationInput] = useState('');

    const handleEventInputChange = (e) => {
        setEventInput(e.target.value);
    };

    const handleDateInputChange = (e) => {
        setDateInput(e.target.value);
    };

    const handleLocationInputChange = (e) => {
        setLocationInput(e.target.value);
    }

    const handleLocationSelect = (selectedLocation) => {
        setLocationInput(selectedLocation);
        setIsExpandedLocation(false);
    };

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
                                    value={eventInput}
                                    onChange={handleEventInputChange}
                                />
                            </div>
                            <div className='col-2'>
                                <input
                                    className='btn btn-light form-select-lg w-100 h-100 rounded-0 border border-dark'
                                    placeholder='Date'
                                    type="date"
                                    value={dateInput}
                                    onChange={handleDateInputChange}
                                >

                                </input>
                            </div>
                            <div className='col-2'>
                                <input
                                    className='btn btn-light form-select-lg w-100 h-100 rounded-0 border border-dark'
                                    placeholder='Localization'
                                    onClick={handleFocusLocalization}
                                    value={locationInput}
                                    onChange={handleLocationInputChange}
                                >
                                </input>
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-dark btn-lg justify-content-center w-100 rounded-0'>
                                    <i className="bi bi-search-heart-fill"></i>
                                    SEARCH
                                </button>
                            </div>
                        </form>
                        {isExpandedEvents && (
                            <div className={`${styles.eventselect}`} ref={containerRefEvents}>
                                <div className='w-100'>

                                    <SearchEventListComponent searchString={eventInput}/>
                                </div>

                            </div>
                        )}

                        {isExpandedLocation && (<div className={styles.locationselect} ref={containerRefLocation}>
                            <SearchEventLocalizationComponent 
                                searchString={locationInput}
                                onLocationSelect={handleLocationSelect}/>
                        </div>
                        )}
                    </div>
                </div>
            </div>

        </section>

    );
};

export default SearchEventComponent;